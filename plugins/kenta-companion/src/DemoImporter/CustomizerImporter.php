<?php
/**
 * Class for the customizer importer used in the Kenta Companion plugin.
 *
 * Code is mostly from the OCDI plugin.
 *
 * @see https://wordpress.org/plugins/one-click-demo-import/
 * @package Kenta Companion
 */

namespace KentaCompanion\DemoImporter;

class CustomizerImporter {
	/**
	 * Import customizer from a DAT file, generated by the Customizer Export/Import plugin.
	 *
	 * @param string $customizer_import_file_path path to the customizer import file.
	 * @param string $demo_slug
	 * @param \stdClass $demo_data
	 */
	public static function import( $customizer_import_file_path, $demo_slug, $demo_data ) {
		$log_file_path = kcmp( 'demos' )->get_log_file_path();

		// Try to import the customizer settings.
		$results = self::import_customizer_options( $customizer_import_file_path, $demo_slug, $demo_data );

		// Check for errors, else write the results to the log file.
		if ( is_wp_error( $results ) ) {
			$error_message = $results->get_error_message();

			// Add any error messages to the frontend_error_messages variable in OCDI main class.
			kcmp( 'demos' )->append_to_frontend_error_messages( $error_message );

			// Write error to log file.
			kcmp( 'io' )->append_to_file(
				$error_message,
				$log_file_path,
				esc_html__( 'Importing customizer settings', 'kenta-companion' )
			);
		} else {
			// Add this message to log file.
			kcmp( 'io' )->append_to_file(
				esc_html__( 'Customizer settings import finished!', 'kenta-companion' ),
				$log_file_path,
				esc_html__( 'Importing customizer settings', 'kenta-companion' )
			);
		}
	}

	/**
	 * Imports uploaded mods and calls WordPress core customize_save actions so
	 * themes that hook into them can act before mods are saved to the database.
	 *
	 * Update: WP core customize_save actions were removed, because of some errors.
	 *
	 * @param string $import_file_path Path to the import file.
	 * @param string $demo_slug
	 * @param \stdClass $demo_data
	 *
	 * @return void|\WP_Error
	 */
	public static function import_customizer_options( $import_file_path, $demo_slug, $demo_data ) {
		// Setup global vars.
		global $wp_customize;

		// Setup internal vars.
		$template = get_template();

		// Make sure we have an import file.
		if ( ! file_exists( $import_file_path ) ) {
			return new \WP_Error(
				'missing_customizer_import_file',
				sprintf( /* translators: %s - file path */
					esc_html__( 'Error: The customizer import file is missing! File path: %s', 'kenta-companion' ),
					$import_file_path
				)
			);
		}

		// Get the upload data.
		$raw = kcmp( 'io' )->data_from_file( $import_file_path );

		// Make sure we got the data.
		if ( is_wp_error( $raw ) ) {
			return $raw;
		}

		$data = unserialize( $raw );

		// Data checks.
		if ( ! is_array( $data ) && ( ! isset( $data['template'] ) || ! isset( $data['mods'] ) ) ) {
			return new \WP_Error(
				'customizer_import_data_error',
				esc_html__( 'Error: The customizer import file is not in a correct format. Please make sure to use the correct customizer import file.', 'kenta-companion' )
			);
		}
		if ( $data['template'] !== $template ) {
			return new \WP_Error(
				'customizer_import_wrong_theme',
				esc_html__( 'Error: The customizer import file is not suitable for current theme. You can only import customizer settings for the same theme or a child theme.', 'kenta-companion' )
			);
		}

		// Import images.
		if ( apply_filters( 'kcmp/customizer_import_images', true ) ) {
			$data['mods']    = self::import_customizer_images( $data['mods'] );
			$data['options'] = self::import_customizer_images( $data['options'] );
			$data['mods']    = self::import_lotta_images( $data['mods'] );
			$data['options'] = self::import_lotta_images( $data['options'] );
		}

		// Handle links
		if ( apply_filters( 'kcmp/customizer_import_links', true ) ) {
			$data['mods']    = self::import_demo_links( $data['mods'], KCMP_DEMO_SITE_URL . $demo_slug, home_url() );
			$data['options'] = self::import_demo_links( $data['options'], KCMP_DEMO_SITE_URL . $demo_slug, home_url() );
		}

		// Modify settings array.
		$data = apply_filters( 'kcmp/customizer_import_settings', $data, $demo_slug, $demo_data );

		// Import custom options.
		if ( isset( $data['options'] ) ) {
			// Require modified customizer options class.
			if ( ! class_exists( '\WP_Customize_Setting' ) ) {
				require_once ABSPATH . 'wp-includes/class-wp-customize-setting.php';
			}

			foreach ( $data['options'] as $option_key => $option_value ) {
				$option = new CustomizerOption( $wp_customize, $option_key, array(
					'default'    => '',
					'type'       => 'option',
					'capability' => 'edit_theme_options',
				) );

				$option->import( $option_value );
			}
		}

		// Should the customizer import use the WP customize_save* hooks?
		$use_wp_customize_save_hooks = apply_filters( 'kcmp/enable_wp_customize_save_hooks', false );

		if ( $use_wp_customize_save_hooks ) {
			do_action( 'customize_save', $wp_customize );
		}

		// Loop through the mods and save the mods.
		foreach ( $data['mods'] as $key => $val ) {
			if ( $use_wp_customize_save_hooks ) {
				do_action( 'customize_save_' . $key, $wp_customize );
			}

			set_theme_mod( $key, $val );
		}

		if ( $use_wp_customize_save_hooks ) {
			do_action( 'customize_save_after', $wp_customize );
		}
	}

	/**
	 * Helper function: Customizer import - imports images for settings saved as mods.
	 *
	 * @param array $mods An array of customizer mods.
	 *
	 * @return array The mods array with any new import data.
	 */
	private static function import_customizer_images( $mods ) {
		foreach ( $mods as $key => $val ) {
			if ( self::customizer_is_image_url( $val ) ) {
				$data = self::customizer_sideload_image( $val );
				if ( ! is_wp_error( $data ) ) {
					$mods[ $key ] = $data->url;

					// Handle header image controls.
					if ( isset( $mods[ $key . '_data' ] ) ) {
						$mods[ $key . '_data' ] = $data;
						update_post_meta( $data->attachment_id, '_wp_attachment_is_custom_header', get_stylesheet() );
					}
				}
			}
		}

		return $mods;
	}

	/**
	 * Import lotta framework images
	 *
	 * @param $settings
	 *
	 * @return mixed
	 */
	private static function import_lotta_images( $settings ) {

		foreach ( $settings as $key => $val ) {
			if ( is_array( $val ) ) {
				// lotta image uploader
				if ( isset( $val['url'] ) && isset( $val['attachment_id'] ) ) {
					$data = self::customizer_sideload_image( $val['url'] );
					if ( ! is_wp_error( $data ) ) {
						$settings[ $key ]['url']           = $data->url ?? '';
						$settings[ $key ]['attachment_id'] = $data->attachment_id ?? 0;
					}
				} else {
					$settings[ $key ] = self::import_lotta_images( $val );
				}
			}
		}

		return $settings;
	}

	/**
	 * Handle demo site url
	 *
	 * @param $settings
	 * @param $demo_site
	 * @param $home
	 *
	 * @return mixed
	 */
	private static function import_demo_links( $settings, $demo_site, $home ) {

		foreach ( $settings as $key => $val ) {
			if ( is_array( $val ) ) {
				$settings[ $key ] = self::import_demo_links( $val, $demo_site, $home );
			} else if ( is_string( $val ) && filter_var( $val, FILTER_VALIDATE_URL ) !== false ) {
				$page = get_page_by_path( str_replace( $demo_site, '', $val ) );
				if ( $page ) {
					$settings[ $key ] = get_page_link( $page );
				} else {
					$settings[ $key ] = str_replace( $demo_site, $home, $val );
				}
			}
		}

		return $settings;
	}

	/**
	 * Helper function: Customizer import
	 * Taken from the core media_sideload_image function and
	 * modified to return an array of data instead of html.
	 *
	 * @param string $file The image file path.
	 *
	 * @return bool|int|\stdClass|string|\WP_Error An array of image data.
	 */
	private static function customizer_sideload_image( $file ) {
		$data = new \stdClass();

		if ( ! function_exists( 'media_handle_sideload' ) ) {
			require_once( ABSPATH . 'wp-admin/includes/media.php' );
			require_once( ABSPATH . 'wp-admin/includes/file.php' );
			require_once( ABSPATH . 'wp-admin/includes/image.php' );
		}
		if ( ! empty( $file ) ) {
			// Set variables for storage, fix file filename for query strings.
			preg_match( '/[^\?]+\.(jpe?g|jpe|gif|png)\b/i', $file, $matches );
			$file_array         = array();
			$file_array['name'] = basename( $matches[0] );

			// Download file to temp location.
			$file_array['tmp_name'] = download_url( $file );

			// If error storing temporarily, return the error.
			if ( is_wp_error( $file_array['tmp_name'] ) ) {
				return $file_array['tmp_name'];
			}

			// Do the validation and storage stuff.
			$id = media_handle_sideload( $file_array, 0 );

			// If error storing permanently, unlink.
			if ( is_wp_error( $id ) ) {
				unlink( $file_array['tmp_name'] );

				return $id;
			}

			// Build the object to return.
			$meta                = wp_get_attachment_metadata( $id );
			$data->attachment_id = $id;
			$data->url           = wp_get_attachment_url( $id );
			$data->thumbnail_url = wp_get_attachment_thumb_url( $id );
			$data->height        = $meta['height'];
			$data->width         = $meta['width'];
		}

		return $data;
	}

	/**
	 * Checks to see whether a string is an image url or not.
	 *
	 * @param string $string The string to check.
	 *
	 * @return bool Whether the string is an image url or not.
	 */
	private static function customizer_is_image_url( $string = '' ) {
		if ( is_string( $string ) ) {
			if ( preg_match( '/\.(jpg|jpeg|png|gif)/i', $string ) ) {
				return true;
			}
		}

		return false;
	}
}
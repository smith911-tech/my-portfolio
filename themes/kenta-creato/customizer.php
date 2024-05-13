<?php
/**
 * Customizer settings default value
 *
 * @package Kenta Creato
 */

if ( ! function_exists( 'kenta_creato_return_yes' ) ) {
	function kenta_creato_return_yes() {
		return 'yes';
	}
}

if ( ! function_exists( 'kenta_creato_return_no' ) ) {
	function kenta_creato_return_no() {
		return 'no';
	}
}

// Disable site wrap by default
add_filter( 'kenta_enable_site_wrap_default_value', 'kenta_creato_return_no' );
// Disable customizer cache by default
add_filter( 'kenta_enable_customizer_cache_default_value', 'kenta_creato_return_no' );

//
//  Card style
//
if ( ! function_exists( 'kenta_creato_card_preset' ) ) {
	function kenta_creato_card_preset() {
		return 'solid-shadow';
	}
}
add_filter( 'kenta_card_style_preset_default_value', 'kenta_creato_card_preset' );
add_filter( 'kenta_store_card_style_preset_default_value', 'kenta_creato_card_preset' );
add_filter( 'kenta_global_sidebar_widgets-style_default_value', 'kenta_creato_card_preset' );

//
// Sidebar
//
add_filter( 'kenta_post_sidebar_section_default_value', 'kenta_creato_return_no' );
add_filter( 'kenta_archive_sidebar_section_default_value', 'kenta_creato_return_no' );

//
// Default color preset
//

if ( ! function_exists( 'kenta_creato_default_color_presets' ) ) {
	function kenta_creato_default_color_presets() {
		return 'kenta-creato';
	}
}
add_filter( 'kenta_color_palettes_default_value', 'kenta_creato_default_color_presets' );

if ( ! function_exists( 'kenta_creato_color_presets' ) ) {
	function kenta_creato_color_presets( $presets ) {
		$presets['kenta-creato'] = array(
			'kenta-primary-color'  => '#00a4db',
			'kenta-primary-active' => '#00d2db',
			'kenta-accent-color'   => '#000000',
			'kenta-accent-active'  => '#000000',
			'kenta-base-300'       => '#383838',
			'kenta-base-200'       => '#383838',
			'kenta-base-100'       => '#f8fafc',
			'kenta-base-color'     => '#ffffff',
		);

		return $presets;
	}
}
add_filter( 'kenta_filter_color_presets', 'kenta_creato_color_presets' );

//
// Dark color preset
//
if ( ! function_exists( 'kenta_creato_dark_base_color' ) ) {
	function kenta_creato_dark_base_color() {
		return [
			'300'     => '#383838',
			'200'     => '#383838',
			'100'     => '#141414',
			'default' => '#000000',
		];
	}
}
add_filter( 'kenta_dark_base_color_default_value', 'kenta_creato_dark_base_color' );

if ( ! function_exists( 'kenta_creato_dark_accent_color' ) ) {
	function kenta_creato_dark_accent_color() {
		return [
			'default' => '#ffffff',
			'active'  => '#ffffff',
		];
	}
}
add_filter( 'kenta_dark_accent_color_default_value', 'kenta_creato_dark_accent_color' );
add_filter( 'kenta_default_dark_scheme_default_value', 'kenta_creato_return_yes' );

//
// Global typography
//
if ( ! function_exists( 'kenta_creato_global_typography' ) ) {
	function kenta_creato_global_typography() {
		return [
			'family'   => 'inter',
			'fontSize' => '16px',
			'variant'  => '400',
		];
	}
}
add_filter( 'kenta_site_global_typography_default_value', 'kenta_creato_global_typography' );

//
// Override header/footer colors
//
if ( ! function_exists( 'kenta_creato_overrde_base_color' ) ) {
	function kenta_creato_overrde_base_color() {
		return [
			'default' => '#000000',
			'100'     => '#000000',
			'200'     => '#383838',
			'300'     => '#383838',
		];
	}
}
add_filter( 'kenta_header_base_color_default_value', 'kenta_creato_overrde_base_color' );
add_filter( 'kenta_footer_base_color_default_value', 'kenta_creato_overrde_base_color' );

if ( ! function_exists( 'kenta_creato_overrde_accent_color' ) ) {
	function kenta_creato_overrde_accent_color() {
		return [
			'active'  => '#ffffff',
			'default' => '#ffffff',
		];
	}
}
add_filter( 'kenta_header_accent_color_default_value', 'kenta_creato_overrde_accent_color' );
add_filter( 'kenta_footer_accent_color_default_value', 'kenta_creato_overrde_accent_color' );

//
// Preloader
//
if ( ! function_exists( 'kenta_creato_preloader_preset' ) ) {
	function kenta_creato_preloader_preset() {
		return 'preset-4';
	}
}
add_filter( 'kenta_preloader_preset_default_value', 'kenta_creato_preloader_preset' );

if ( ! function_exists( 'kenta_creato_preloader_colors' ) ) {
	function kenta_creato_preloader_colors() {
		return [
			'background' => '#000000',
			'accent'     => '#ffffff',
			'primary'    => 'var(--kenta-primary-color)',
		];
	}
}
add_filter( 'kenta_preloader_colors_default_value', 'kenta_creato_preloader_colors' );

//
// Social Networks
//
if ( ! function_exists( 'kenta_creato_social_networks' ) ) {
	function kenta_creato_social_networks() {
		return [
			[
				'visible'  => true,
				'settings' => [
					'color' => [ 'official' => '#557dbc' ],
					'label' => 'Facebook',
					'url'   => '',
					'share' => 'https://www.facebook.com/sharer/sharer.php?u={url}',
					'icon'  => [ 'value' => 'fab fa-facebook', 'library' => 'fa-brands' ]
				],
			],
			[
				'visible'  => true,
				'settings' => [
					'color' => [ 'official' => '#515151' ],
					'label' => 'Twitter',
					'url'   => '',
					'share' => 'https://twitter.com/share?url={url}&text={text}',
					'icon'  => [ 'value' => 'fab fa-x-twitter', 'library' => 'fa-brands' ]
				],
			],
			[
				'visible'  => true,
				'settings' => [
					'color' => [ 'official' => '#ed1376' ],
					'label' => 'Instagram',
					'url'   => '',
					'icon'  => [ 'value' => 'fab fa-instagram', 'library' => 'fa-brands' ]
				],
			],
			[
				'visible'  => true,
				'settings' => [
					'color' => [ 'official' => '#f42e53' ],
					'label' => 'Tiktok',
					'url'   => '',
					'icon'  => [ 'value' => 'fab fa-tiktok', 'library' => 'fa-brands' ]
				],
			],
		];
	}
}
add_filter( 'kenta_social_networks_default_value', 'kenta_creato_social_networks' );


//
// Archive
//
if ( ! function_exists( 'kenta_creato_archive_structure' ) ) {
	function kenta_creato_archive_structure() {
		return [
			[ 'id' => 'thumbnail', 'visible' => true ],
			[ 'id' => 'categories', 'visible' => true ],
			[ 'id' => 'title', 'visible' => true ],
			[ 'id' => 'excerpt', 'visible' => true ],
			[ 'id' => 'divider', 'visible' => true ],
			[ 'id' => 'metas', 'visible' => true ],
		];
	}
}
add_filter( 'kenta_card_structure_default_value', 'kenta_creato_archive_structure' );

if ( ! function_exists( 'kenta_creato_entry_tax_style' ) ) {
	function kenta_creato_entry_tax_style() {
		return 'badge';
	}
}
add_filter( 'kenta_entry_tax_style_cats_default_value', 'kenta_creato_entry_tax_style' );

if ( ! function_exists( 'kenta_creato_entry_divider' ) ) {
	function kenta_creato_entry_divider() {
		return [
			'style'   => 'dashed',
			'width'   => 1,
			'color'   => 'var(--kenta-base-300)',
			'hover'   => '',
			'inherit' => false,
		];
	}
}
add_filter( 'kenta_entry_divider_default_value', 'kenta_creato_entry_divider' );

// archive header
if ( ! function_exists( 'kenta_creato_archive_header_background' ) ) {
	function kenta_creato_archive_header_background() {
		return [
			'type'  => 'color',
			'color' => 'var(--kenta-accent-color)'
		];
	}
}
add_filter( 'kenta_archive_header_background_default_value', 'kenta_creato_archive_header_background' );

if ( ! function_exists( 'kenta_creato_archive_title_color' ) ) {
	function kenta_creato_archive_title_color() {
		return [ 'initial' => 'var(--kenta-base-color)' ];
	}
}
add_filter( 'kenta_archive_title_color_default_value', 'kenta_creato_archive_title_color' );

if ( ! function_exists( 'kenta_creato_archive_description_color' ) ) {
	function kenta_creato_archive_description_color() {
		return [ 'initial' => 'var(--kenta-base-color)' ];
	}
}
add_filter( 'kenta_archive_description_color_default_value', 'kenta_creato_archive_description_color' );


//
// Header elements
//

if ( ! function_exists( 'kenta_creato_header_primary_row_elements' ) ) {
	function kenta_creato_header_primary_row_elements() {
		return [
			'desktop' => [
				[
					'elements' => [ 'logo' ],
					'settings' => [ 'width' => '20%' ]
				],
				[
					'elements' => [ 'menu-1' ],
					'settings' => [ 'width' => '60%', 'justify-content' => 'center', 'elements-gap' => '16px' ]
				],
				[
					'elements' => [ 'socials', 'theme-switch', 'search', 'trigger' ],
					'settings' => [ 'width' => '20%', 'justify-content' => 'flex-end', 'elements-gap' => '16px' ]
				],
			],
			'mobile'  => [
				[
					'elements' => [ 'trigger' ],
					'settings' => [ 'width' => '20%', ]
				],
				[
					'elements' => [ 'socials' ],
					'settings' => [ 'width' => '60%', 'justify-content' => 'center' ]
				],
				[
					'elements' => [ 'theme-switch', 'search' ],
					'settings' => [ 'width' => '20%', 'justify-content' => 'flex-end' ]
				],
			],
		];
	}
}
add_filter( 'kenta_header_primary_row_default_value', 'kenta_creato_header_primary_row_elements' );

if ( ! function_exists( 'kenta_creato_header_top_bar_row_elements' ) ) {
	function kenta_creato_header_top_row_elements() {
		return [

			'desktop' => [
				[
					'elements' => [],
					'settings' => [ 'width' => '50%' ]
				],
				[
					'elements' => [],
					'settings' => [ 'width' => '50%', 'justify-content' => 'flex-end' ]
				],
			],
			'mobile'  => [
				[
					'elements' => [ 'logo' ],
					'settings' => [ 'width' => '100%', 'justify-content' => 'center' ]
				],
			],
		];
	}
}

add_filter( 'kenta_header_top_row_default_value', 'kenta_creato_header_top_row_elements' );

if ( ! function_exists( 'kenta_creato_header_top_row_min_height' ) ) {
	function kenta_creato_header_top_row_min_height() {
		return '80px';
	}
}
add_filter( 'kenta_header_top_bar_row_min_height_default_value', 'kenta_creato_header_top_row_min_height' );

if ( ! function_exists( 'kenta_creato_header_top_row_visibility' ) ) {
	function kenta_creato_header_top_row_visibility() {
		return [
			'desktop' => 'no',
			'tablet'  => 'yes',
			'mobile'  => 'yes',
		];
	}
}
add_filter( 'kenta_header_top_bar_row_visibility_default_value', 'kenta_creato_header_top_row_visibility' );

if ( ! function_exists( 'kenta_creato_canvas_drawer_placement' ) ) {
	function kenta_creato_canvas_drawer_placement() {
		return 'left';
	}
}
add_filter( 'kenta_canvas_drawer_placement_default_value', 'kenta_creato_canvas_drawer_placement' );

// menu element
if ( ! function_exists( 'kenta_creato_menu_typography' ) ) {
	function kenta_creato_menu_typography() {
		return [
			'family'        => 'inherit',
			'fontSize'      => [ 'desktop' => '0.875rem', 'tablet' => '0.875rem', 'mobile' => '0.75em' ],
			'variant'       => '500',
			'lineHeight'    => '1.5',
			'textTransform' => 'capitalize',
		];
	}
}
add_filter( 'kenta_header_el_menu_1_top_level_typography_default_value', 'kenta_creato_menu_typography' );
add_filter( 'kenta_header_el_menu_2_top_level_typography_default_value', 'kenta_creato_menu_typography' );

if ( ! function_exists( 'kenta_creato_menu_color' ) ) {
	function kenta_creato_menu_color() {
		return [
			'initial' => 'var(--kenta-accent-color)',
			'hover'   => 'var(--kenta-primary-color)',
			'active'  => 'var(--kenta-primary-color)',
		];
	}
}
add_filter( 'kenta_header_el_menu_1_top_level_text_color_default_value', 'kenta_creato_menu_color' );
add_filter( 'kenta_header_el_menu_2_top_level_text_color_default_value', 'kenta_creato_menu_color' );

// logo element
if ( ! function_exists( 'kenta_creato_header_logo_title_typography' ) ) {
	function kenta_creato_header_logo_title_typography() {
		return [
			'family'        => 'inherit',
			'fontSize'      => '28px',
			'variant'       => '700',
			'lineHeight'    => '1.5',
			'textTransform' => 'uppercase',
		];
	}
}
add_filter( 'kenta_header_el_logo_site_title_typography_default_value', 'kenta_creato_header_logo_title_typography' );

//
// Sticky header
//
add_filter( 'kenta_sticky_header_default_value', 'kenta_creato_return_yes' );

//
// Footer elements
//

if ( ! function_exists( 'kenta_creato_footer_middle_row_elements' ) ) {
	function kenta_creato_footer_middle_row_elements() {
		return [
			[
				'elements' => [ 'widgets-1', 'footer-socials' ],
				'settings' => [
					'width'   => [ 'desktop' => '33.33%', 'tablet' => '100%', 'mobile' => '100%' ],
					'padding' => [ 'top' => '12px', 'right' => '12px', 'bottom' => '12px', 'left' => '12px' ]
				],
			],
			[
				'elements' => [ 'widgets-2' ],
				'settings' => [
					'width'   => [ 'desktop' => '33.33%', 'tablet' => '100%', 'mobile' => '100%' ],
					'padding' => [ 'top' => '12px', 'right' => '12px', 'bottom' => '12px', 'left' => '12px' ]
				],
			],
			[
				'elements' => [ 'widgets-4' ],
				'settings' => [
					'width'   => [ 'desktop' => '33.33%', 'tablet' => '100%', 'mobile' => '100%' ],
					'padding' => [ 'top' => '12px', 'right' => '12px', 'bottom' => '12px', 'left' => '12px' ]
				],
			]
		];
	}
}
add_filter( 'kenta_footer_middle_row_default_value', 'kenta_creato_footer_middle_row_elements' );

if ( ! function_exists( 'kenta_creato_footer_middle_row_vt_spacing' ) ) {
	function kenta_creato_footer_middle_row_vt_spacing() {
		return '68px';
	}
}
add_filter( 'kenta_footer_middle_row_vt_spacing_default_value', 'kenta_creato_footer_middle_row_vt_spacing' );

if ( ! function_exists( 'kenta_creato_builder_row_border' ) ) {
	function kenta_creato_builder_middle_row_border() {
		return [
			'style' => 'solid',
			'width' => 2,
			'color' => 'var(--kenta-base-300)',
		];
	}
}
add_filter( 'kenta_footer_middle_row_border_top_default_value', 'kenta_creato_builder_middle_row_border' );

if ( ! function_exists( 'kenta_creato_builder_row_border' ) ) {
	function kenta_creato_builder_row_border() {
		return [
			'style' => 'dashed',
			'width' => 1,
			'color' => 'var(--kenta-base-300)',
		];
	}
}
add_filter( 'kenta_footer_bottom_row_border_top_default_value', 'kenta_creato_builder_row_border' );

//
// Article & Archive header style
//
if ( ! function_exists( 'kenta_creato_article_featured_image_position' ) ) {
	/**
	 * Change default article featured image position design
	 *
	 * @return string
	 */
	function kenta_creato_article_featured_image_position() {
		return 'behind';
	}
}
add_filter( 'kenta_post_featured_image_position_default_value', 'kenta_creato_article_featured_image_position' );
add_filter( 'kenta_page_featured_image_position_default_value', 'kenta_creato_article_featured_image_position' );


if ( ! function_exists( 'kenta_creato_remove_default_content_spacing' ) ) {
	/**
	 * Remove default content spacing
	 *
	 * @return string
	 */
	function kenta_creato_remove_default_content_spacing() {
		return '0x';
	}
}
//add_filter( 'kenta_single_post_content_spacing_default_value', 'kenta_creato_remove_default_content_spacing' );
add_filter( 'kenta_pages_content_spacing_default_value', 'kenta_creato_remove_default_content_spacing' );

if ( ! function_exists( 'kenta_creato_default_archive_header_padding' ) ) {
	/**
	 * Change default padding for archive header
	 *
	 * @return array
	 */
	function kenta_creato_default_archive_header_padding() {
		return array(
			'top'    => '148px',
			'bottom' => '68px',
			'left'   => '24px',
			'right'  => '24px',
			'linked' => false
		);
	}
}
add_filter( 'kenta_archive_header_padding_default_value', 'kenta_creato_default_archive_header_padding' );

if ( ! function_exists( 'kenta_creato_featured_image_background_overlay' ) ) {
	/**
	 * Change default hero background for single posts and pages
	 *
	 * @return array
	 */
	function kenta_creato_featured_image_background_overlay() {
		return array(
			'type'  => 'color',
			'color' => '#000000'
		);
	}
}
add_filter( 'kenta_post_featured_image_background_overlay_default_value', 'kenta_creato_featured_image_background_overlay' );
add_filter( 'kenta_page_featured_image_background_overlay_default_value', 'kenta_creato_featured_image_background_overlay' );


if ( ! function_exists( 'kenta_creato_featured_image_background_overlay_opacity' ) ) {
	/**
	 * Change default hero background for single posts and pages
	 */
	function kenta_creato_featured_image_background_overlay_opacity() {
		return 0.6;
	}
}
add_filter( 'kenta_post_featured_image_background_overlay_opacity_default_value', 'kenta_creato_featured_image_background_overlay_opacity' );
add_filter( 'kenta_page_featured_image_background_overlay_opacity_default_value', 'kenta_creato_featured_image_background_overlay_opacity' );

if ( ! function_exists( 'kenta_creato_featured_image_elements_override' ) ) {
	function kenta_creato_featured_image_elements_override() {
		return array(
			'override' => '#fff'
		);
	}
}
add_filter( 'kenta_post_featured_image_elements_override_default_value', 'kenta_creato_featured_image_elements_override' );
add_filter( 'kenta_page_featured_image_elements_override_default_value', 'kenta_creato_featured_image_elements_override' );

//
// Fallback image
//

if ( ! function_exists( 'kenta_creato_featured_image_fallback' ) ) {
	function kenta_creato_featured_image_fallback() {
		return array(
			'url' => KENTA_CREATO_ASSETS_URL . 'images/featured-image.jpg',
			'x'   => 0.5,
			'y'   => 0.5,
		);
	}
}
add_filter( 'kenta_post_featured_image_fallback_default_value', 'kenta_creato_featured_image_fallback' );
add_filter( 'kenta_page_featured_image_fallback_default_value', 'kenta_creato_featured_image_fallback' );
// Disable fallback image in archive
//add_filter( 'kenta_entry_thumbnail_use_fallback_default_value', 'kenta_creato_return_no' );

//
// Author bio
//
if ( ! function_exists( 'kenta_creato_author_bio_border' ) ) {
	function kenta_creato_author_bio_border() {
		return [
			'style'   => 'solid',
			'width'   => 2,
			'color'   => 'var(--kenta-base-300)',
			'hover'   => '',
			'inherit' => false,
		];
	}
}
add_filter( 'kenta_post_author_bio_border_default_value', 'kenta_creato_author_bio_border' );

if ( ! function_exists( 'kenta_creato_author_bio_background' ) ) {
	function kenta_creato_author_bio_background() {
		return [
			'type'  => 'color',
			'color' => 'var(--kenta-base-color)',
		];
	}
}
add_filter( 'kenta_post_author_bio_background_default_value', 'kenta_creato_author_bio_background' );

if ( ! function_exists( 'kenta_creato_author_bio_shadow' ) ) {
	function kenta_creato_author_bio_shadow() {
		return [
			'enable'     => 'yes',
			'horizontal' => '10px',
			'vertical'   => '10px',
			'blur'       => '0px',
			'spread'     => '0px',
			'color'      => 'var(--kenta-base-300)',
		];
	}
}
add_filter( 'kenta_post_author_bio_shadow_default_value', 'kenta_creato_author_bio_shadow' );

//
// Widgets area
//
if ( ! function_exists( 'kenta_creato_widgets_title' ) ) {
	function kenta_creato_widgets_title() {
		return 'style-2';
	}
}
add_action( 'kenta_global_sidebar_title-style_default_value', 'kenta_creato_widgets_title' );
add_action( 'kenta_footer_el_widgets_1_title-style_default_value', 'kenta_creato_widgets_title' );
add_action( 'kenta_footer_el_widgets_2_title-style_default_value', 'kenta_creato_widgets_title' );
add_action( 'kenta_footer_el_widgets_3_title-style_default_value', 'kenta_creato_widgets_title' );
add_action( 'kenta_footer_el_widgets_4_title-style_default_value', 'kenta_creato_widgets_title' );
add_action( 'kenta_header_el_widgets_1_title-style_default_value', 'kenta_creato_widgets_title' );
add_action( 'kenta_header_el_widgets_2_title-style_default_value', 'kenta_creato_widgets_title' );

//
// Transparent Header settings
//

// Enable transparent header by default
add_filter( 'kenta_enable_transparent_header_default_value', 'kenta_creato_return_yes' );

if ( ! function_exists( 'kenta_creato_transparent_header_device' ) ) {
	function kenta_creato_transparent_header_device() {
		return 'all';
	}
}
add_filter( 'kenta_enable_transparent_header_device_default_value', 'kenta_creato_transparent_header_device' );

//
// Site background
//
if ( ! function_exists( 'kenta_creato_site_background' ) ) {
	function kenta_creato_site_background() {
		return [
			'type'  => 'color',
			'color' => 'var(--kenta-base-color)'
		];
	}
}
add_filter( 'kenta_site_background_default_value', 'kenta_creato_site_background' );

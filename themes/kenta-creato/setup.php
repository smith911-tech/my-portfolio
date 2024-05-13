<?php

//
// One click demo import
//
if ( ! function_exists( 'kenta_creato_demo_slug' ) ) {
	function kenta_creato_demo_slug() {
		return 'kenta-creato';
	}
}
add_filter( 'kenta_welcome_demo_slug', 'kenta_creato_demo_slug' );

if ( ! function_exists( 'kenta_creato_demo_name' ) ) {
	function kenta_creato_demo_name() {
		return __( 'Kenta Creato', 'kenta-creato' );
	}
}
add_filter( 'kenta_welcome_demo_name', 'kenta_creato_demo_name' );

if ( ! function_exists( 'kenta_creato_demo_screenshot' ) ) {
	function kenta_creato_demo_screenshot() {
		return KENTA_CREATO_URL . 'screenshot.png';
	}
}
add_filter( 'kenta_welcome_demo_screenshot', 'kenta_creato_demo_screenshot' );

//
// Dynamic css cache
//
if ( ! function_exists( 'kenta_creato_cache_key' ) ) {
	function kenta_creato_cache_key() {
		return 'kenta_creato_dynamic_css';
	}
}
add_filter( 'kenta_filter_dynamic_css_cache_key', 'kenta_creato_cache_key' );

if ( ! function_exists( 'kenta_creato_cache_version' ) ) {
	function kenta_creato_cache_version() {
		return KENTA_CREATO_VERSION;
	}
}
add_filter( 'kenta_filter_cached_dynamic_css_version', 'kenta_creato_cache_version' );

//
// Enqueue patterns style
//
if ( ! function_exists( 'kenta_creato_enqueue_styles' ) ) {
	function kenta_creato_enqueue_styles() {
		wp_enqueue_style(
			'kenta-creato-style',
			get_stylesheet_uri(),
			array(),
			KENTA_CREATO_VERSION
		);
	}
}
add_action( 'wp_enqueue_scripts', 'kenta_creato_enqueue_styles' );

if ( ! function_exists( 'kenta_creato_setup' ) ) {
	/**
	 * Theme setup
	 */
	function kenta_creato_setup() {
		add_editor_style( 'style.css' );
	}
}
add_action( 'after_setup_theme', 'kenta_creato_setup' );

//
// Starter content
//

if ( ! function_exists( 'kenta_creato_starter_content' ) ) {
	/**
	 * Starter content
	 *
	 * @param $starter
	 *
	 * @return mixed
	 */
	function kenta_creato_starter_content( $starter ) {
		$starter['widgets'] = array(
			'primary-sidebar'           => array(
				'search',
				'text_about',
				'text_business_info',
			),
			'kenta_footer_el_widgets_1' => array(
				'text_business_info',
			),
			'kenta_footer_el_widgets_2' => array(
				'text_about',
			),
			'kenta_footer_el_widgets_3' => array(
				'recent-posts',
				'categories',
			),
			'kenta_footer_el_widgets_4' => array(
				'search',
			),
		);

		$starter['posts'] = array(
			'front'   => array(
				'post_type'    => 'page',
				'post_title'   => esc_html__( 'Home', 'kenta-creato' ),
				'thumbnail'    => '{{image-cup}}',
				'post_content' => kenta_creato_starter_template( 'home' ),
				'template'     => 'templates/boxed-trans-header-page-builder.php',
			),
			'about'   => array(
				'post_type'    => 'page',
				'post_title'   => esc_html__( 'About', 'kenta-creato' ),
				'thumbnail'    => '{{image-cup}}',
				'post_content' => kenta_creato_starter_template( 'about' ),
				'template'     => 'templates/boxed-trans-header-page-builder.php',
			),
			'contact' => array(
				'post_type'    => 'page',
				'post_title'   => esc_html__( 'Contact', 'kenta-creato' ),
				'thumbnail'    => '{{image-cup}}',
				'post_content' => kenta_creato_starter_template( 'contact' ),
				'template'     => 'templates/boxed-trans-header-page-builder.php',
			),
			'blog',
		);

		$starter['options'] = array(
			'show_on_front'  => 'page',
			'page_on_front'  => '{{front}}',
			'page_for_posts' => '{{blog}}',
		);

		return $starter;
	}
}
add_filter( 'kenta_filter_starter_content', 'kenta_creato_starter_content' );


if ( ! function_exists( 'kenta_creato_setup' ) ) {
	function kenta_creato_setup() {
		remove_theme_support( 'block-templates' );
	}
}
add_action( 'after_setup_theme', 'kenta_creato_setup' );

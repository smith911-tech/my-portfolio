<?php

/**
 * Theme functions
 *
 * @package Kenta Creato
 */

// don't call the file directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'KENTA_CREATO_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'KENTA_CREATO_VERSION', '1.0.1' );
}

if ( ! defined( 'KENTA_CREATO_PATH' ) ) {
	define( 'KENTA_CREATO_PATH', trailingslashit( get_stylesheet_directory() ) );
}

if ( ! defined( 'KENTA_CREATO_URL' ) ) {
	define( 'KENTA_CREATO_URL', trailingslashit( get_stylesheet_directory_uri() ) );
}

if ( ! defined( 'KENTA_CREATO_ASSETS_URL' ) ) {
	define( 'KENTA_CREATO_ASSETS_URL', KENTA_CREATO_URL . 'assets/' );
}

// Helper functions
require_once KENTA_CREATO_PATH . 'helpers.php';
// Customizer settings hook
require_once KENTA_CREATO_PATH . 'setup.php';
// Theme patterns
require_once KENTA_CREATO_PATH . 'patterns.php';
// Customizer settings hook
require_once KENTA_CREATO_PATH . 'customizer.php';

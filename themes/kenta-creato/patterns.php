<?php
/**
 * Theme patterns
 *
 * @package Kenta Creato
 */

if ( ! function_exists( 'kenta_creato_block_patterns_init' ) ) {
	/**
	 * Init block patterns
	 */
	function kenta_creato_block_patterns_init() {
		// register custom pattern category
		if ( function_exists( 'register_block_pattern_category' ) ) {
			register_block_pattern_category( 'kenta-creato', array(
				'label' => __( 'Kenta Creato', 'kenta-creato' )
			) );
		}

		// register custom patterns
		if ( function_exists( 'register_block_pattern' ) ) {
			register_block_pattern(
				'kenta-creato/hero',
				array(
					'title'      => __( 'Big Hero', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'hero' ),
					'categories' => array( 'kenta-creato', 'featured', 'header', 'banner' )
				)
			);
			register_block_pattern(
				'kenta-creato/page-hero',
				array(
					'title'      => __( 'Page Hero', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'page-hero' ),
					'categories' => array( 'kenta-creato', 'featured', 'header', 'banner' )
				)
			);
			register_block_pattern(
				'kenta-creato/counters',
				array(
					'title'      => __( 'Counters', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'counters' ),
					'categories' => array( 'kenta-creato', 'featured', 'columns' )
				)
			);
			register_block_pattern(
				'kenta-creato/services',
				array(
					'title'      => __( 'Services', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'services' ),
					'categories' => array( 'kenta-creato', 'featured', 'columns' )
				)
			);
			register_block_pattern(
				'kenta-creato/section-right-media',
				array(
					'title'      => __( 'Section with right media', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'section-01' ),
					'categories' => array( 'kenta-creato', 'featured', 'columns', 'call-to-action' )
				)
			);
			register_block_pattern(
				'kenta-creato/section-left-media',
				array(
					'title'      => __( 'Section with left media', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'section-02' ),
					'categories' => array( 'kenta-creato', 'featured', 'columns', 'call-to-action' )
				)
			);
			register_block_pattern(
				'kenta-creato/quote',
				array(
					'title'      => __( 'Quote', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'quote' ),
					'categories' => array( 'kenta-creato', 'featured', 'text', 'call-to-action' )
				)
			);
			register_block_pattern(
				'kenta-creato/featured-content',
				array(
					'title'      => __( 'Featured content', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'featured-content' ),
					'categories' => array( 'kenta-creato', 'featured', 'columns' )
				)
			);
			register_block_pattern(
				'kenta-creato/features',
				array(
					'title'      => __( 'Features', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'features' ),
					'categories' => array( 'kenta-creato', 'featured', 'text', 'columns' )
				)
			);
			register_block_pattern(
				'kenta-creato/subscribe',
				array(
					'title'      => __( 'Subscribe', 'kenta-creato' ),
					'content'    => kenta_creato_pattern_markup( 'subscribe' ),
					'categories' => array( 'kenta-creato', 'featured', 'text', 'call-to-action' )
				)
			);
		}
	}
}
add_action( 'init', 'kenta_creato_block_patterns_init' );

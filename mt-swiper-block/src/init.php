<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Swiper css and JS for both front and wp-admin screens
 * Enqueue init script for all Swipers
 */
function mt_swiper_block_assets() {
	/**
	 * Swiper CSS
	 */
	wp_register_style('swiper', "https://unpkg.com/swiper/css/swiper.min.css", false, '', 'all');
	wp_enqueue_style('swiper');

	/**
	 * Swiper JS
	 */
	wp_register_script('swiper', "https://unpkg.com/swiper/js/swiper.min.js", '', '', true);
	wp_enqueue_script('swiper');
}
add_action( 'enqueue_block_assets', 'mt_swiper_block_assets' );

/**
 * Initialize all Swipers on front
 */
function mt_swiper_block_front_init() {
	wp_register_script('init-swiper', plugins_url( 'dist/mt-swiper-init.js', dirname( __FILE__ ) ), '', '', true);
	wp_enqueue_script('init-swiper');
}
add_action( 'wp_enqueue_scripts', 'mt_swiper_block_front_init' );

/**
 * Enqueue block assets (wp-admin edit screen scripts)
 */
function mt_swiper_block_cgb_block_assets() {

	/**
	 * Register styles and scripts for the block
	 */
	wp_register_style(
		'mt_swiper_block-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-editor' ),
		null
	);

	wp_register_script(
		'mt_swiper_block-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	wp_register_style(
		'mt_swiper_block-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);

	/**
	 * Add some extra variables to access from the block's JS file
	 */
	wp_localize_script(
		'mt_swiper_block-cgb-block-js',
		'cgbGlobal',
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ )
		]
	);

	/**
	 * Register a new block
	 */
	register_block_type(
		'cgb/block-mt-swiper-block', array(
			'style'         => 'mt_swiper_block-cgb-style-css',
			'editor_script' => 'mt_swiper_block-cgb-block-js',
			'editor_style'  => 'mt_swiper_block-cgb-block-editor-css'
		)
	);
}
add_action( 'init', 'mt_swiper_block_cgb_block_assets' );

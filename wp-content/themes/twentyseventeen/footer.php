<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?>

		</div><!-- #content -->
		<div class="col-xs-12 footer-site">
					<div class="wrap">
						<div class="col-md-4 first-item">
							<div class="row">
								<span class="content">Interested in working with us?</a>
								<span class="icon-arrow-icon-f bullet"></span>
							</div>
						</div>
						<div class="col-md-4 middel-item">
							<div class="row">
								<a href="javascript:void(0)">Learn more about our process</a>
								<span class="icon-arrow-icon-f bullet"></span>
							</div>
						</div>
						<div class="col-md-3 last-item">
							<div class="row">
							<a href="javascript:void(0)">Or get started on your project</a>
							</div>
						</div>
				</div>
			</div>
		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="wrap">
				<?php 
				get_template_part( 'template-parts/footer/footer', 'widgets' );
				if ( has_nav_menu( 'social' ) ) : ?>
					<!-- <nav class="social-navigation" role="navigation" aria-label="<?php _e( 'Footer Social Links Menu', 'twentyseventeen' ); ?>">
						<?php
							/*wp_nav_menu( array(
								'theme_location' => 'social',
								'menu_class'     => 'social-links-menu',
								'depth'          => 1,
								'link_before'    => '<span class="screen-reader-text">',
								'link_after'     => '</span>' . twentyseventeen_get_svg( array( 'icon' => 'chain' ) ),
							) );*/
						?>
					</nav> --><!-- .social-navigation -->
				<?php endif; 
				//get_template_part( 'template-parts/footer/site', 'info' );
				?>
			</div><!-- .wrap -->
		</footer><!-- #colophon -->
	</div><!-- .site-content-contain -->
</div><!-- #page -->
<!-- <link rel="stylesheet" href="<?php //bloginfo('template_url'); ?>/bootstrap/bootstrap.min.js" type="text/css" media="screen" /> -->
<?php wp_footer(); ?>

</body>
</html>

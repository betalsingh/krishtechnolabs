<?php /* Template Name: inner page fixed width */ ?>

<?php get_header(); ?>
<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

	<?php if ( has_post_thumbnail() ) :
		$thumb_id = get_post_thumbnail_id();
		$thumb_url_array = wp_get_attachment_image_src($thumb_id, 'thumbnail-size', true);
		$thumb_url = $thumb_url_array[0];
		?>
		<script src="<?php bloginfo('template_url'); ?>/assets/js/jquery.parallax-1.1.3.js"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
			    jQuery('.parallax-container').each(function(){
			       jQuery(this).parallax("50%", 0.6); 
			    });
			    jQuery('.get-started').each(function(){
			       jQuery(this).parallax("50%", 0.8); 
			    });
			});
		</script>		
        <div class="parallax-container" style="background-image: url('<?php echo $thumb_url; ?>');">        	
			<div class="breadcrumbs">
				 <?php echo do_shortcode('[breadcrumb]' ); ?>
			</div>			
        </div>
	<?php endif; ?>

		<div class="container">
			<?php /*?><header class="entry-header">
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
				<?php twentyseventeen_edit_link( get_the_ID() ); ?>
			</header><?php */?>
            <!-- .entry-header -->
			<div class="entry-content">
            	<div class="inner-page">
					<?php if (have_posts()) : while (have_posts()) : the_post(); 
                        the_content(); 
                        endwhile; 
                    endif; 
                    ?>
                </div>
			</div><!-- .entry-content -->
		</div>

	</main><!-- .site-main -->
</div><!-- .content-area -->
<?php get_footer(); ?>


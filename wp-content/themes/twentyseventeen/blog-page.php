<?php /* Template Name: blog page full width */ ?>

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
			    
			});
		</script>		
        <div class="parallax-container" style="background-image: url('<?php echo $thumb_url; ?>');">   
        	<div class="blog-header">From Our Blog</div>		     	
			<div class="breadcrumbs">
				 <?php echo do_shortcode('[breadcrumb]' ); ?>
			</div>			
        </div>
	<?php endif; ?>
			<div class="entry-content">
            	<div class="blog-custom-page">
					<?php if (have_posts()) : while (have_posts()) : the_post(); 
                        the_content(); 
                        endwhile; 
                    endif; 
                    ?>
                </div>
			</div><!-- .entry-content -->
	</main><!-- .site-main -->
</div><!-- .content-area -->
<?php get_footer(); ?>
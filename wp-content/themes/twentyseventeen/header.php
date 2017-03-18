<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/iconmoon.css" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/bootstrap/bootstrap.min.css" type="text/css" media="screen" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">

<!-- <script type="text/javascript" src="<?php //bloginfo('template_url'); ?>/assets/js/bootstrap/main.build.js"></script> -->
<?php wp_head(); ?>

<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/menu.css" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/blog.css" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/media-query.css" type="text/css" media="screen" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
<script type="text/javascript">
	jQuery(document).ready(function(){
		if(jQuery( window ).width() < 1139){
			jQuery('.in-view').removeClass('desktop');
			jQuery('.in-view').addClass('mobile');	
		}else{
			jQuery('.in-view').removeClass('mobile');
			jQuery('.in-view').addClass('desktop');	
		}

		if (jQuery(this).scrollTop() > 455){  
		    jQuery('header').addClass("sticky");
		  }
		  else{
		    jQuery('header').removeClass("sticky");
		  }
		
		jQuery('.toggle').on('click', function(){
				if(jQuery('.in-view').hasClass('active')){
						jQuery('.in-view').addClass("out");
						setTimeout(function() {
							jQuery('.in-view').removeClass("out");
						}, 900);
				}
				jQuery('.in-view').toggleClass("active");
		});
		
		jQuery(window).resize(function(){
			if(jQuery( window ).width() < 1139){
				jQuery('.in-view').removeClass('desktop');
				jQuery('.in-view').addClass('mobile');	
			}else{
				jQuery('.in-view').removeClass('mobile');
				jQuery('.in-view').addClass('desktop');	
			}
		});
		jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > 445){  
		    jQuery('header').addClass("sticky");
		  }
		  else{
		    jQuery('header').removeClass("sticky");
		  }
		});
		jQuery('.selectpicker').selectpicker({
		  	style: 'btn-info',
		  	dropRight: true,
		  	size: 6,
		  	
			});
});
</script>
</head>

<body <?php body_class(); ?>>  
<div id="page" class="site">
	

	<header id="masthead" class="global desktop in-view show" style="">
    <div>
        <a class="logo-white" href="/">
            <div class="mask">
                <span class="fg">krish</span>
            </div>
            
        </a>
    </div>

    <div>
        <span class="toggle">
            <div class="mask">
                <span class="fg">
                    <em></em>
                    <em></em>
                    <em></em>
                </span>
            </div>
            <span class="bg">
                <em></em>
                <em></em>
                <em></em>
            </span>        
        </span>
    </div>

    

    <div class="wrapper">
       <h2>Krish</h2>
         <nav>
            <?php wp_nav_menu( array(
			'theme_location' => 'top',
			'menu_id'        => 'top-menu',
			) ); ?>
        </nav>
        <script type="text/javascript">
			jQuery(document).ready(function(){
				jQuery('#top-menu li.menu-item-has-children').each(function(element){						
					jQuery(this).children('a').first().after('<span class="plus"> </span>');
				});

				jQuery('#top-menu li.menu-item-has-children span.plus').click(function(e) {		
					jQuery(this).toggleClass('active').siblings('ul').toggleClass('active');
				});
			});
		</script>
    </div>
   
</header><!-- #masthead -->




        <?php if ( is_front_page() ) : ?>
           
           <?php putRevSlider("main-home-banner-slider") ?>

        <?php endif; ?>

	<?php
	// If a regular post or page, and not the front page, show the featured image.
	if ( has_post_thumbnail() && ( is_single() || ( is_page() && ! twentyseventeen_is_frontpage() ) ) ) :
		/*echo '<div class="single-featured-image-header">';
		the_post_thumbnail( 'twentyseventeen-featured-image' );
		echo '</div><!-- .single-featured-image-header -->';*/
	endif;
	?>

	<div class="site-content-contain">
		<div id="content" class="site-content">

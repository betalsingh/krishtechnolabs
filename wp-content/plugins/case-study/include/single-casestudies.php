<?php
get_header();
global $post;
?>

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
	<div class="container">
		<div class="casestudy-detail">
			<span>Case Study</span>
			<h1><?php echo $post->post_title; ?></h1></h1>
		</div>
	</div>

	<div class="breadcrumbs">
		<?php get_breadcrumb(); ?>
	</div>			
</div>
<?php endif; ?>

<div id="main-content" class="main-content">
	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			<article id="post-<?php echo $post->ID; ?>" class="post-<?php echo $post->ID; ?> page type-page status-publish hentry">
				<!-- <header class="entry-header"><h1 class="entry-title"><?php //echo $post->post_title; ?></h1></header> -->
				<div class="entry-content inner-page">
					<?php
				
						$post_data = get_post($post->ID);
						$custom_data = get_post_custom($post->ID);
						$case_id =  $post->ID;
				
						if($custom_data) 
						{
							$banner_image_src = wp_get_attachment_url( $custom_data['cs_banner_image'][0]);
							if(empty($banner_image_src))
								$banner_image_src = CASE_PDIR_PATH."include/images/no-img.jpg";
					
							$list_image_src = wp_get_attachment_image_src( $custom_data['cs_list_image'][0], 'large');
							$featured = $custom_data['cs_featured'][0];
							$shortdesc = $custom_data['cs_shortdes'][0];
							$aboutcasestudy = $custom_data['cs_content_aboutcasestudy'][0];
							$casestudymaincontent = $custom_data['cs_content_casestudymaincontent'][0];
							$casestudybottomcontent = $custom_data['cs_content_casestudybottomcontent'][0];
							$slider_type = $custom_data['cs_slidertype'][0];
							$total_slider = $custom_data['cs_image_id'][0];
					
							$html .= '<section id="__mainContainer">
										<section class="mainContainer cs_container">
											<div class="container__pages">';
												if($aboutcasestudy) {
													$html .= '<section class="about-case-study-block">'.$aboutcasestudy.'</section>';			
												}
												if($slider_type == 'slider1'):
													$html .= '<div class="casestudy-slider"><div class="container"><section id="__CaseStudySlider" class="owl-carousel">';
														for($i=0;$i<$total_slider;$i++):
															$image_src = '';
															$case_attach_id = get_post_meta($case_id,'cs_imagebox'.$i,true);  
															if(!empty($case_attach_id)):
																$image_src = wp_get_attachment_image_src($case_attach_id, 'large');
																$image_src = $image_src[0];
															else: 
																$cs_slider_noimg = get_option('cs_slider_noimg');
																$cs_slider_svgnoimg = get_option('cs_slider_svgnoimg');
																
																if(!empty($cs_slider_noimg) && empty($cs_slider_svgnoimg)): 
																	$image_slider_src = wp_get_attachment_image_src($cs_slider_noimg, 'large');
																	$image_slider_src = $image_slider_src[0]; 
																elseif(!empty($cs_slider_noimg) && !empty($cs_slider_svgnoimg)): 
																	$image_slider_src = wp_get_attachment_image_src($cs_slider_noimg, 'large');
																	$image_slider_src = $image_slider_src[0];
																	$image_svg_src = wp_get_attachment_image_src($cs_slider_svgnoimg, 'large');
																	$image_slider_svg_src = $image_svg_src[0];
																else: 
																	$image_slider_src = CASE_PURL_PATH."include/images/slider-no-image.jpg";
																	$image_slider_svg_src = CASE_PURL_PATH."include/images/slider-no-image.svg";
																endif;	
															endif;
															$title = get_post_meta($case_id,'cs_title'.$i,true);  			
															$desc = get_post_meta($case_id,'cs_desc'.$i,true);  			
															$link = get_post_meta($case_id,'cs_link'.$i,true);
															 	
															$Linkcheck = get_post_meta($case_id,'cs_linkoption'.$i,true);
															$html .= '<div class="item">';
															
																if(!empty($image_src)):
																	$html .= '<img class="lazyOwl" src="'.$image_src.'" alt="'.$title.'">';
																else: 
																	if(!empty($cs_slider_noimg) && empty($cs_slider_svgnoimg)):
																		$html .= '<img class="lazyOwl" src="'.$image_slider_src.'" alt="'.$title.'">';
																	else: 
																		$html .= '<figure><object data="'.$image_slider_svg_src.'" style="width:100%;"><img class="lazyOwl" src="'.$image_slider_src.'" alt="'.$title.'" /></object></figure>';
																	endif; 
																endif;
															
															if(!empty($link)):
																$html .= '<a href="'.$link.'" title="'.$title.'" target="'.$Linkcheck.'"></a>';
															endif;
															if(!empty($desc)):
																$html .= '<div class="caption">'.$desc.'</div>';
															endif;
															if(!empty($link)):
																$html .= '</a>';
															endif;
															
															$html .= '</div>';
														endfor;	
													$html .= '</section></div></div>';
												else: 
													$html .= '<section id="__CaseStudySlider2" class="owl-carousel">';
														for($i=0;$i<$total_slider;$i++):
															$case_attach_id = get_post_meta($case_id,'cs_imagebox'.$i,true);
																												
															if(!empty($case_attach_id)):
																$image_src = wp_get_attachment_image_src($case_attach_id, 'large');
																$image_src = $image_src[0];
															else:
																$image_src = plugins_url('images/banner-no-image.jpg', __FILE__ );
															endif;
															
															$title = get_post_meta($case_id,'cs_title'.$i,true);  			
															  			
															$desc = get_post_meta($case_id,'cs_desc'.$i,true);  			
															$link = get_post_meta($case_id,'cs_link'.$i,true);
															$Linkcheck = get_post_meta($case_id,'linkoption'.$i,true);
															$html .= '<div class="item">';
																
																	$html .= '<img class="lazyOwl" src="'.$image_src.'" alt="'.$title.'">';
																
																if(!empty($desc)):
																	$html .= '<div class="caption">';
																		if(!empty($link)):
																			$html .= '<a href="'.$link.'" target="'.$Linkcheck.'" title="'.$title.'">';
																		endif;		
																		$html .= $desc;
																		if(!empty($link)):
																			$html .= '</a>';
																		endif;		
																	$html .= '</div>';
																endif;
															$html .= '</div>';
														endfor;
													$html .= '</section>
													<section id="__CaseStudySlider2_thumb" class="owl-carousel">';
														for($i=0;$i<$total_slider;$i++):															
															$case_attach_id = get_post_meta($case_id,'cs_imagebox'.$i,true);
															if(!empty($case_attach_id)):
																$image_src = wp_get_attachment_image_src($case_attach_id, 'thumbnail');
																$image_src = $image_src[0];
															else: 	
																$image_src = CASE_PURL_PATH.'include/images/tm-no-img.jpg';
															endif;
															$title = get_post_meta($case_id,'cs_title'.$i,true);
															$html .= '<div class="item">';
																
																$html .= '<img class="lazyOwl" src="'.$image_src.'" alt="'.$title.'">';
																
															$html .= '</div>';
														endfor;
													$html .= '</section>';
											endif;
											$case_study_heading1 = get_option('cs_study_heading1');
											$case_study_heading2 = get_option('cs_study_heading2');
											$html .= '<section class="content-block">
														<div class="container">';
															if( !empty($casestudymaincontent) ):	
																$html .= '<div>
																	<p>'.$casestudymaincontent.'</p>
																</div>';
															endif;
														$html .= '</div></section>';

																											   
															if( !empty($casestudybottomcontent) ):		
																$html .= '<section class="content-block cs-bottom-blocks"><div class="container"><div>
																	<p>'.$casestudybottomcontent.'</p>
																</div></div></section>';
															endif;	
												$html .= '</div>
													
										
									</section>
								</section>';
							echo $html;
						}
						else
							echo "No data found.";
			?>
				</div>
 <?php $loop = new WP_Query(array('post_type' => 'portfolio', 'posts_per_page' => 3,  'orderby'  => 'rand')); ?>
 <div class="cs-related-projects inner-page">
 	<div id="cnfolioHolder" class="container">

 	<div class="title-f">RELATED PROJECTS</div>

        <ul class="cnOurHolder">
            <?php if ( $loop ) :
                $i = 1;
                while ( $loop->have_posts() ) :
                    $loop->the_post();
                 
                    
                    $portfolio_url = get_post_custom_values('_url');
                    $portfolio_url_tab = get_post_custom_values('_ntab');
                    $nTab = '';
                    if($portfolio_url_tab[0]){
                        $nTab = 'target="_blank"';
                    }
                    if (preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $portfolio_url[0])) {
                        $url = parse_url($portfolio_url[0]);
                        if(!isset($url['scheme'])){
                            $url = 'http://'.$portfolio_url[0];
                        }
                        else{
                            $url = $portfolio_url[0];
                        }
                    }
                    else{
                        $url = $portfolio_url[0];
                    }
                    $portfolio_company = get_post_custom_values('_company');
                    ?>
                    <li class="item" data-id="id-<?php echo $i++; ?>" data-type="<?php echo $cd_pf_class; ?>">
                        <div class="mix cnportfolio-image">
                            <?php
                                $imgUrl = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );
                            ?>
                            <img src="<?php echo $imgUrl[0]; ?>" alt="<?php echo get_the_title(); ?>" />
                            <div class="cnportfolio-hover inner">
                                <div class="cnportfolio-content-wrapper">
                                    <h3><?php the_title(); ?></h3>
                                </div>
                                <div class="cnlinks">
                                    <?php if(empty($url)){ ?>
                                    <a class="popup-with-zoom-anim cnportfolio-details" href="#popup-content-<?php echo get_the_ID(); ?>" style="float: none; margin: 0 auto;">
                                        <span></span>
                                    </a>
                                    <?php }else{ ?>
                                        <a class="popup-with-zoom-anim cnportfolio-details" href="#popup-content-<?php echo get_the_ID(); ?>">
                                            <span></span>
                                        </a>
                                    <?php } ?>
                                    <?php if(!empty($url)){ ?>
                                        <a class="cnportfolio-live" href="<?php echo $url; ?>" <?php echo $nTab ?>>
                                            <span></span>
                                        </a>
                                    <?php } ?>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                        
                    </li>
                <?php endwhile;
               
      			wp_reset_query();
            else: ?>
                <li class="error-not-found">Sorry, no portfolio entries for while.</li>
            <?php endif; ?>
        </ul>
    </div>
 </div>
			</article>
		</div><!-- #content -->
	</div><!-- #primary -->
	<?php get_sidebar( 'content' ); ?>
</div>
<?php
get_footer();
?>
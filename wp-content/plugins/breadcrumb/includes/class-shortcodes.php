<?php

/*
* @Author 		pickplugins
* Copyright: 	2015 pickplugins
*/

if ( ! defined('ABSPATH')) exit;  // if direct access


class class_breadcrumb_shortcodes  {
	
	
    public function __construct(){

		add_shortcode( 'breadcrumb', array( $this, 'breadcrumb_display' ) );

    }
	

	
	
	public function breadcrumb_display($atts, $content = null ) {
			$atts = shortcode_atts(
				array(
					'themes' => '',
	
					), $atts);
	
				$html = '';
				
				$themes = $atts['themes'];
	
	
				$breadcrumb_hide_on_pages = get_option( 'breadcrumb_hide_on_pages' );
				$breadcrumb_hide_on_page_by_id = get_option( 'breadcrumb_hide_on_page_by_id' );			
				
				$hide_page_ids = explode(',', $breadcrumb_hide_on_page_by_id);
				
				$current_page_id = get_the_ID();
				
				$html = '';
				
				$breadcrumb = new breadcrumb();
				$html.= $breadcrumb->breadcrumb_html($themes);
				// code added to display right side breadcrums
				//echo $breadcrumb->get_current_page_depth();
				//die;
				//if($breadcrumb->get_current_page_depth() > 0) {
					global $post;					
					$child_pages = get_pages( array(
						'parent' => $post->ID, // Only pages that are children of the current page
						'depth' => 1 ,   // Only show one level of hierarchy
						'sort_column' => 'menu_order',
						'sort_order' => 'ASC'
					));
					/*echo "<pre/>";
						print_r($child_pages);
					die;*/	
					if(count($child_pages)) {
						//$html .= '<div class="breadcrumb-container-right-block">';
						if(count($child_pages) > 3) {
							$html .= '<select name="breadcrumb-level-three-sub-pages-select" class="selectpicker" onchange="if (this.value) window.location.href=this.value">';
							//$html .= '<option value="' . get_permalink($post) . '">All ' . $post->post_title . '</option>';
							//$html .= '<option value="">View Inner Pages</option>';
							foreach($child_pages as $item) {	
								$html .= '<option value="' . get_permalink($item) . '">' . $item->post_title . '</option>';
							}
							$html .= '</select>';
						} else {
							$html .= '<ul class="breadcrumb-level-three-sub-pages-ul">';
							//$html .= '<li><a href="' . get_permalink($post) . '">Back to ' . $post->post_title . '</a><span class="separator">'.$breadcrumb->breadcrumbSeparator.'</span></li>';
							foreach($child_pages as $item) {	
								$html .= '<li><a href="' . get_permalink($item) . '">' . $item->post_title . '</a><span class="separator">/</span></li>';
							}
							$html .= '</ul>';
						}
						$html .= '</div>';
					} else {
						if($breadcrumb->get_current_page_depth() > 0) {
							$parent = $post->post_parent;
							/*echo "<pre/>";
								print_r($parent);
							die;*/						
							//$siblings = get_pages('child_of='.$parent);
							$siblings =  get_pages( array(
								'parent' => $parent, // Only pages that are children of the current page
								'depth' => 1 ,   // Only show one level of hierarchy
								'sort_column' => 'menu_order',
								'sort_order' => 'ASC'
							));

							if(count($siblings)) {
								if(count($siblings) > 3) {
									$html .= '<select name="breadcrumb-level-three-sub-pages-select" class="selectpicker" onchange="if (this.value) window.location.href=this.value">';
									//$html .= '<option value="' . get_permalink($post) . '">All ' . $post->post_title . '</option>';
									//$html .= '<option value="">View Inner Pages</option>';
									foreach($siblings as $sitem) {
										if($sitem->ID == $post->ID) {
											$html .= '<option class="active" value="" selected="selected">' . $sitem->post_title . '</option>';
										} else {	
											$html .= '<option value="' . get_permalink($sitem) . '">' . $sitem->post_title . '</option>';
										}
									}
									$html .= '</select>';
								} else {
									$html .= '<ul class="breadcrumb-level-three-sub-pages-ul">';
									//$html .= '<li><a href="' . get_permalink($post) . '">Back to ' . $post->post_title . '</a><span class="separator">'.$breadcrumb->breadcrumbSeparator.'</span></li>';
									foreach($siblings as $sitem) {
										if($sitem->ID == $post->ID) {
											$html .= '<li class="active">' . $sitem->post_title . '<span class="separator">/</span></li>';
										} else {	
											$html .= '<li><a href="' . get_permalink($sitem) . '">' . $sitem->post_title . '</a><span class="separator">/</span></li>';
										}
									}
									$html .= '</ul>';
								}
								//$html .= '</div>';
							}
						}
						$html .= '</div>';
					}
				//}				
				// code added to display right side breadcrums
				if(is_home() && !empty($breadcrumb_hide_on_pages['home'])){
					return '';
					}
				if(is_front_page() && !empty($breadcrumb_hide_on_pages['front_page'])){
					return '';
					}	
					
				if(is_front_page() && is_home() && !empty($breadcrumb_hide_on_pages['blog_front_page'])){
					return '';
					}						
				else{
					
					
					if(in_array($current_page_id,$hide_page_ids)){
							
						return '';
						
						}
					else{
						return $html;
						
						}
	
				}

	}
	


}


new class_breadcrumb_shortcodes();
<?php 
/*******************************************************************
* BUILD THE SHORTCODE
********************************************************************/
// [ajax_filter_search]
function ajax_filter_search($atts, $content = null) {
    extract(shortcode_atts(array(
		'post_type'				=> AFSAdmin::afs_retrieve('_general_post_type'),
		'post_tax' 				=> AFSAdmin::afs_retrieve('_general_post_taxonomy'),
		'posts_per_page'		=> AFSAdmin::afs_retrieve('_general_posts_per_page'),
		'filter_type'			=> '',
		'filter_by' 			=> '',
		'filter_months' 		=> '',
		'filter_years' 			=> '',
		'filter_withPDF' 		=> '',
		'offset' 				=> 0,
    ), $atts));
	
	// Build String to attach to [afs_feed] to allow for custom building
	$afs_args = '';
	if($post_type == '') { } else { $afs_args .=' post_type="'.$post_type.'" '; }
	if($posts_per_page == '') { } else { $afs_args .=' posts_per_page="'.$posts_per_page.'" '; }
	if($filter_by == '') { } else { $afs_args .=' filter_by="'.$filter_by.'" '; }
	if($filter_months == '') { } else { $afs_args .=' filter_months="'.$filter_months.'" '; }
	if($filter_years == '') { } else { $afs_args .=' filter_years="'.$filter_years.'" '; }
	if($filter_withPDF == '') { } else { $afs_args .=' filter_withPDF="'.$filter_withPDF.'" '; }
	if($offset == '') { } else { $afs_args .=' offset="'.$offset.'" '; }
		
	if($filter_type == '') { 
		$all='all'; 
		$filter_type_count = 999;
	} else { 
		$afs_args .=' filter_type="'.$filter_type.'" '; 
		$all=$filter_type;
		$filter_type_array = explode(',',$filter_type);
		$filter_type_count = count($filter_type_array);
	}
		
	$text = '';
	$i = 1;
	
	/****************************
	Template Header
	****************************/
	$text .= '<div id="afs-wrapper">';
	$text .= '<div class="press-releases">';
	$text .= '<form id="newsForm">';
	$text .= '';
	
	
	$text .= '<div class="col-xs-1TableRowItem2">';
	
	/****************************
	Top Tabs
	****************************/
	
	if(AFSAdmin::afs_retrieve('_general_show_filters') == 1 && $filter_type_count > 1) { 
	$taxonomy = AFSAdmin::afs_retrieve('_general_post_taxonomy');
		if($taxonomy == 'none' || $taxonomy == '') {
		} else {
                
			$text .= '<div class="blog-filter-Tabsbox">';
			$text .= '<ul class="hidden-xs visible-xs afs-CommonTabs">';
			$text .= '<li class="active"><a rel="'.$all.'" href="#">All</a></li>';
						
												$terms = get_terms($taxonomy, $args = array('orderby'=>'id')	);
												if($terms) {
													foreach($terms as $term) {
														if(isset($filter_type_array)) {
															if(in_array($term->slug,$filter_type_array)) {
																if($term->name == 'Uncategorized') { continue; }
																$text .= '<li><a rel="'.$term->slug.'" href="#">'.$term->name.'</a></li>';
															}
														} else {
															if($term->name == 'Uncategorized') { continue; }
															$text .= '<li><a rel="'.$term->slug.'" href="#">'.$term->name.'</a></li>';
														}
													}
												}
			$text .= '						</ul>';
			
			$text .= '						<input type="hidden" name="filingType" />';
			
			$text .= '						<div class="left-box-filter-blog visible-xs1">';
			
			$text .= '							<label for="category"><strong>Categories</strong></label>';
			$text .= '							<select class="target selectpicker" name="category1">';
			$text .= '								<option value="all">All</option>';
													$terms = get_terms($taxonomy, $args = array('orderby'=>'id')	);
													if($terms) {
													
														foreach($terms as $term) {
															if(isset($filter_type_array)) {
																if(in_array($term->slug,$filter_type_array)) {
																	if($term->name == 'Uncategorized') { continue; }
																	$text .= '<option value="'.$term->slug.'">'.$term->name.'</option>';
																}
															} else {
																if($term->name == 'Uncategorized') { continue; }
																	$text .= '<option value="'.$term->slug.'">'.$term->name.'</option>';
															}
														}
													}
			$text .= '							</select>';
			$text .= '						</div>';
			$text .= '										<div class="right-box-filter-blog">';
			$text .= '											<label for="archives"><strong>Archives</strong></label>';
			$text .= '												<select class="form-control1 target1 selectpicker" name="filterYears">';
			$text .= '													<option value="">All Years</option>';
										 						
																$years = wp_get_archives(array('type'=>'monthly','echo'=>0, 'post_type' => $post_type));
																//$years = wp_get_archives(array('type'=>'yearly','echo'=>0, 'post_type' => $post_type));
																$years = explode( '</li>' , $years );
																$years_array = array();
																foreach( $years as $link ) {
																	$link = str_replace( array( '<li>' , "\n" , "\t" , "\s" ), '' , $link );
																	if( '' != $link )
																		$years_array[] = $link;
																	else
																		continue;
																}
																foreach($years_array as $theyear) {
																	$text .= '<option value="'.strip_tags($theyear).'">'.$theyear.'</option>';
																}
										
	$text .= '												</select>';
	$text .= '											</div>';

			$text .= '					</div>';
		}
 	} 
	
	
				
	if(AFSAdmin::afs_retrieve('_general_views') == 1) { 
            
	$text .= '				<div id="newsViewOptionsPanel" class="afs-Switch" style="display: block;">';
	$text .= '					<ul class="pull-right">';
	$text .= '						<li><a rel="listPR" href="javascript:;"><span class="fa fa-list-ul"></span>&nbsp;List View</a></li>';
	$text .= '						<li class="active"><a rel="gridPR" href="javascript:;"><span class="fa fa-th"></span>&nbsp;Grid View</a></li>';
	$text .= '					</ul>';
	$text .= '				</div>';
	
	} else { 
            	
    $text .= '        		';
			
	}
	
	/****************************
	Begin Feed Area
	****************************/
	$text .= '				';
	$text .= '				<div class="afs-Panel afs-Panel_all">';
	$text .= '					<div id="newsPanel" class="scroll">';
	$text .= '						<div class="afs-TableWrapper gridPR" style="display: block;">';
	$text .= '							';
	
	$text .= '								<div class="afs-Table">';
	
	
	
	
	/****************************
	Get The Feed
	****************************/
	$text .= '									<div id="newsPanelResults" class="jscroll-inner">';
	$text .= '										[afs_feed '.$afs_args.']'; // <-- the shortcode
	$text .= '										';
	$text .= '									</div>';
	$text .= '									';
	$text .= '								</div>';
	
	/****************************
	Close Feed Area
	****************************/
	$text .= '								';
	$text .= '							';
	$text .= '						</div>';
	$text .= '					</div>';
	$text .= '				</div>';
	$text .= '				';
	
	
	/****************************
	Template Footer
	****************************/
    $text .= '        	';
    $text .= '    	</form>';
	$text .= '	</div>';
	$text .= '</div>';
	
	return do_shortcode($text);

}

add_shortcode("ajax_filter_search", "ajax_filter_search");
	

// [afs_feed]
function afs_feed($atts, $content = null) {
    extract(shortcode_atts(array(
		'post_type'				=> AFSAdmin::afs_retrieve('_general_post_type'),
		'post_tax' 				=> AFSAdmin::afs_retrieve('_general_post_taxonomy'),
		'posts_per_page'		=> AFSAdmin::afs_retrieve('_general_posts_per_page'),
		'filter_type' 			=> '',
		'filter_by' 			=> '',
		'filter_months' 		=> '',
		'filter_years' 			=> '',
		'filter_withPDF' 		=> '',
		'offset' 				=> 0,
    ), $atts));
	
	$text = '';
	$i = 1;
	
	define('FILTER_TYPE', $filter_type);
	
	/****************************
	Define The Args & Defaults
	****************************/
	
	$offset_pag = $offset;
	if($filter_type == 'all' ) { $filter_type = ''; }
	if($offset != 0) {  $offset = ($offset - 1) * $posts_per_page; }
	if($posts_per_page == '') { get_option( 'posts_per_page' ); }

	$args = array(
		'post_type'			=> $post_type,
		'posts_per_page' 	=> $posts_per_page,
		'offset'				=> $offset,
		'date_query' 		=> array(array()),
		'orderby' 			=> 'date',
		'order'   			=> 'DESC',
	);
	
	if($filter_by !== '') { $args['s'] = $filter_by; }
	if($filter_years !== '') { $args['date_query'][]['year'] = $filter_years; }
	if($filter_months !== '') { $args['date_query'][]['month'] = $filter_months; }
	if($post_tax == 'none' || $post_tax == '') {
		// do nothing
	} else {
		if($post_tax == 'category') {
			$args['category_name'] = $filter_type;
		} elseif($post_tax == 'post_tag') {
			$args['tag'] = $filter_type;
		} else {
			// It's a custom post type:
			if($filter_type !== '') {
				
				$filter_type = explode(',',$filter_type);				
				$tax_array = array(
								'taxonomy' => $post_tax,
								'field' => 'slug',
								'terms' => $filter_type,
							);
				$args['tax_query'][] = $tax_array;
			}
			
			
		}
	}
	
	$query = new WP_Query($args);

	if ( $query->have_posts() ) { 

		$total_count 			= $query->found_posts;
		//$current_page_number   	= get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;

		if($offset == 0) {
			$current_page_number = 1;
		} else {
			$current_page_number = $offset;
		}

		//$posts_pp  				= get_option( 'posts_per_page' );
		$posts_pp  				= $posts_per_page;
		$posts_per_page 		= $current_page_number * $posts_pp;

		//$current_post_position = ($posts_per_page - $posts_pp) + 1;
		$current_post_position = $offset + 1;

		if($posts_per_page > $total_count) { $posts_per_page = $total_count; }
		
		$n = 1;
		$mar = 'margin-left:0;';
		while ( $query->have_posts() ) { $query->the_post();
			
			$text .= '<div id="post-'.get_the_ID().'" class="'.join( '  ', get_post_class( 'afs-Loadingdata afs-HasGA afs-TableRowItem gridPR'.$i )).'" role="article" itemscope itemtype="http://schema.org/BlogPosting" style="'.$mar.'">';
            
			$text .= return_template();
			
            $text .= '<div class="clearfix"></div>';
        	$text .= '</div>';
			
			if($n % 3 == 0) { $text .= '<div class="clearfix"></div>'; }
			if($n % 3 == 0) { $mar = 'margin-left:0;';} else { $mar = ''; }
			
			$i++; 
			$n++;
		} 

			// Pagination
			

			$text .= '';
			$text .= '	 <div class="col-md-12">';
			$text .= 		afs_page_navi( array('echo' => false, 'custom_query' => $query, 'offset' => $offset_pag));
			$text .= '	</div>';
			$text .= '';

	} else {

		$text .= 'No data found...';

	}

	wp_reset_query();

	return $text;

}

add_shortcode("afs_feed", "afs_feed");

?>
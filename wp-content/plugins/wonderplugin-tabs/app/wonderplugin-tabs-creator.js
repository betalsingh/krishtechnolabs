/** Wonderplugin Tabs Plugin Free Version
 * Copyright 2015 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://www.wonderplugin.com
 * Version 4.0 
 */
(function($){$(document).ready(function(){var TRANSITION_EFFECTS=["fade","fadeout","slide"];$(".wonderplugin-engine").css({display:"none"});$("#wonderplugin-tabs-toolbar").find("li").each(function(index){$(this).click(function(){if($(this).hasClass("wonderplugin-tab-buttons-selected"))return;$(this).parent().find("li").removeClass("wonderplugin-tab-buttons-selected");if(!$(this).hasClass("laststep"))$(this).addClass("wonderplugin-tab-buttons-selected");$("#wonderplugin-tabs-tabs").children("li").removeClass("wonderplugin-tab-selected");
$("#wonderplugin-tabs-tabs").children("li").eq(index).addClass("wonderplugin-tab-selected");$("#wonderplugin-tabs-tabs").removeClass("wonderplugin-tabs-grey");if(index==3){previewTabs();$("#wonderplugin-tabs-tabs").addClass("wonderplugin-tabs-grey")}else if(index==4)publishTabs()})});var addMediaToList=function(data){if($("#wonderplugin-newestfirst").is(":checked"))wonderplugin_tabs_config.slides.unshift(data);else wonderplugin_tabs_config.slides.push(data)};var contentDialog=function(dialogType,
onSuccess,data,dataIndex){var dialogCode="<div class='wonderplugin-dialog-container'>"+"<div class='wonderplugin-dialog-bg'></div>"+"<div class='wonderplugin-dialog'>"+"<h3 id='wonderplugin-dialog-title'>Add Tab</h3>"+"<div class='error' id='wonderplugin-dialog-error' style='display:none;'></div>"+"<table id='wonderplugin-dialog-form'>";dialogCode+="<tr>"+"<th>Tab Title</th>"+"<td><input name='wonderplugin-dialog-tabtitle' type='text' id='wonderplugin-dialog-tabtitle' value='' class='large-text' /></td>"+
"</tr>"+"<tr><th>Tab Icon</th>"+"<td><label><input name='wonderplugin-dialog-tabicon' type='radio' id='wonderplugin-dialog-tabicon' value='fontawesome' checked /> Enter Font Awesome Icon CSS Class: </label>"+"<input name='wonderplugin-dialog-tabicon-fontawesome' type='text' id='wonderplugin-dialog-tabicon-fontawesome' value='' class='regular-text' />"+"<p style='margin:8px 16px 12px;'>Font Awesome CSS Class Example: <span style='color:#a00000;font-weight:bold;'>fa-info-circle&nbsp;&nbsp;&nbsp;&nbsp;</span><a href='http://fortawesome.github.io/Font-Awesome/cheatsheet/' target='_blank' class='wonderplugintabs-help'>View The Complete Font Awesome Icon List</a></p>"+
"<label><input name='wonderplugin-dialog-tabicon' type='radio' id='wonderplugin-dialog-tabicon' value='image' /> Enter Image URL: </label>"+"<input name='wonderplugin-dialog-tabicon-image' type='text' id='wonderplugin-dialog-tabicon-image' value='' class='regular-text' /> <input type='button' class='button' data-textid='wonderplugin-dialog-tabicon-image' id='wonderplugin-dialog-select-icon' value='Upload' />"+"<p style='margin:8px 16px 12px;'>Image Width / Height: <input name='wonderplugin-dialog-tabicon-image-width' type='number' id='wonderplugin-dialog-tabicon-image-width' value='48' class='small-text' /> / <input name='wonderplugin-dialog-tabicon-image-height' type='number' id='wonderplugin-dialog-tabicon-image-height' value='48' class='small-text' /></p>"+
"</td></tr>";if(dialogType==0){dialogCode+="<tr><th>HTML Code</th>"+"<td><textarea name='wonderplugin-dialog-tabcontent' type='text' id='wonderplugin-dialog-tabcontent' rows='15'></textarea></td>"+"</tr>";dialogCode+="<tr><th></th>"+"<td><p style='font-weight:bold;'>* You can not add the shortcode of the current tab group to itself.</p></td>"+"</tr>"}else{dialogCode+="<tr><th>Select a Page</th>"+"<td><div id='wonderplugin-dialog-pagelist'></div></td>"+"</tr>";dialogCode+="<tr><th></th>"+"<td><p style='font-weight:bold;'>* You can not select a page that contains the current tab group itself.</p></td>"+
"</tr>"}dialogCode+="</table>"+"<div class='wonderplugin-dialog-buttons'>"+"<input type='button' class='button button-primary' id='wonderplugin-dialog-ok' value='OK' />"+"<input type='button' class='button' id='wonderplugin-dialog-cancel' value='Cancel' />"+"</div>"+"</div>"+"</div>";var $dialog=$(dialogCode);$("body").append($dialog);var enabletinymce=$("#wonderplugin-tabs-enabletinymce").text()=="1";if(enabletinymce&&typeof tinymce!=="undefined"&&tinymce)$("#wonderplugin-dialog-tabcontent").wp_editor();
$(".wonderplugin-dialog").css({"margin-top":String($(document).scrollTop()+60)+"px"});$(".wonderplugin-dialog-bg").css({height:$(document).height()+"px"});if(dialogType==1){$("#wonderplugin-dialog-pagelist").empty();var pagelist=$.parseJSON($("#wonderplugin-tabs-pagelist").text());for(var i=0;i<pagelist.length;i++){var pageitem='<div class="wonderplugin-dialog-pagelist-item">'+'<div class="wonderplugin-dialog-pagelist-item-radio">'+'<input type="radio" name="wonderplugin-dialog-pagelist-item-radioinput" value="'+
pagelist[i].ID+'" />'+"</div>"+'<div class="wonderplugin-dialog-pagelist-item-id">'+pagelist[i].ID+"</div>"+'<div class="wonderplugin-dialog-pagelist-item-author">'+pagelist[i].post_author+"</div>"+'<div class="wonderplugin-dialog-pagelist-item-title">'+pagelist[i].post_title+"</div>"+'<div style="clear:both;"></div><div>';$("#wonderplugin-dialog-pagelist").append(pageitem)}$(".wonderplugin-dialog-pagelist-item").click(function(){$(this).find("input:radio[name=wonderplugin-dialog-pagelist-item-radioinput]").attr("checked",
true)})}if(data){$("#wonderplugin-dialog-tabtitle").val(data.tabtitle);if(dialogType==0)$("#wonderplugin-dialog-tabcontent").val(data.tabcontent);else if(dialogType==1&&data.pageid>0){$("input:radio[name=wonderplugin-dialog-pagelist-item-radioinput][value="+data.pageid+"]").attr("checked",true);if($("input[name=wonderplugin-dialog-pagelist-item-radioinput]:checked").length>0){var t=$("input[name=wonderplugin-dialog-pagelist-item-radioinput]:checked").parent().parent().position().top;$("#wonderplugin-dialog-pagelist").scrollTop(t)}}$("input:radio[name=wonderplugin-dialog-tabicon][value="+
data.tabicon+"]").attr("checked",true);$("#wonderplugin-dialog-tabicon-fontawesome").val(data.tabiconfontawesome);$("#wonderplugin-dialog-tabicon-image").val(data.tabiconimage);$("#wonderplugin-dialog-tabicon-image-width").val(data.tabiconimagewidth);$("#wonderplugin-dialog-tabicon-image-height").val(data.tabiconimageheight)}var media_upload_onclick=function(event){event.preventDefault();var buttonId=$(this).attr("id");var media_uploader=wp.media.frames.file_frame=wp.media({title:"Choose Image",button:{text:"Choose Image"},
multiple:false});media_uploader.on("select",function(event){var selection=media_uploader.state().get("selection");var attachment=selection.first().toJSON();if(buttonId=="wonderplugin-dialog-select-icon"){if(attachment.type!="image"){$("#wonderplugin-dialog-error").css({display:"block"}).html("<p>Please select an image file</p>");return}$("#wonderplugin-dialog-tabicon-image").val(attachment.url)}$("#wonderplugin-dialog-error").css({display:"none"}).empty()});media_uploader.open()};if(parseInt($("#wonderplugin-tabs-wp-history-media-uploader").text())==
1){var buttonId="";var history_media_upload_onclick=function(event){buttonId=$(this).attr("id");var mediaType="image";tb_show("Upload "+mediaType,"media-upload.php?referer=wonderplugin-tabs&type="+mediaType+"&TB_iframe=true",false);return false};window.send_to_editor=function(html){tb_remove();if(buttonId=="wonderplugin-dialog-select-icon"){var $img=$("img",html);if(!$img.length){$("#wonderplugin-dialog-error").css({display:"block"}).html("<p>Please select an image file</p>");return}var thumbnail=
$img.attr("src");var src=$(html).is("a")?$(html).attr("href"):thumbnail;$("#wonderplugin-dialog-tabicon-image").val(src)}$("#wonderplugin-dialog-error").css({display:"none"}).empty()};$("#wonderplugin-dialog-select-icon").click(history_media_upload_onclick)}else $("#wonderplugin-dialog-select-icon").click(media_upload_onclick);$("#wonderplugin-dialog-ok").click(function(){if(dialogType==1&&$("input[name=wonderplugin-dialog-pagelist-item-radioinput]:checked").length<=0){$("#wonderplugin-dialog-error").css({display:"block"}).html("<p>Please select a page</p>");
return}var content="";if(dialogType==0)if(enabletinymce&&typeof tinymce!=="undefined"&&tinymce&&tinymce.activeEditor)content=tinymce.activeEditor.getContent();else content=$.trim($("#wonderplugin-dialog-tabcontent").val());var item={type:dialogType,tabtitle:$.trim($("#wonderplugin-dialog-tabtitle").val()),tabcontent:content,pageid:dialogType==1?$("input[name=wonderplugin-dialog-pagelist-item-radioinput]:checked").val():-1,tabicon:$("input[name=wonderplugin-dialog-tabicon]:checked").val(),tabiconfontawesome:$.trim($("#wonderplugin-dialog-tabicon-fontawesome").val()),
tabiconimage:$.trim($("#wonderplugin-dialog-tabicon-image").val()),tabiconimagewidth:$.trim($("#wonderplugin-dialog-tabicon-image-width").val()),tabiconimageheight:$.trim($("#wonderplugin-dialog-tabicon-image-height").val())};if(enabletinymce&&typeof tinymce!=="undefined"&&tinymce)tinymce.remove();$dialog.remove();onSuccess([item])});$("#wonderplugin-dialog-cancel").click(function(){if(enabletinymce&&typeof tinymce!=="undefined"&&tinymce)tinymce.remove();$dialog.remove()})};var updateMediaTable=function(){$("#wonderplugin-tabs-media-table").empty();
for(var i=0;i<wonderplugin_tabs_config.slides.length;i++)$("#wonderplugin-tabs-media-table").append("<li class='wonderplugin-tabs-media-table-li' data-order='"+i+"'>"+"<div class='wonderplugin-tabs-media-table-id'>"+(i+1)+"</div>"+"<div class='wonderplugin-tabs-media-table-tabtitle'>"+wonderplugin_tabs_config.slides[i].tabtitle+"&nbsp;</div>"+"<div class='wonderplugin-tabs-media-table-buttons'>"+"<a class='wonderplugin-tabs-media-table-button wonderplugin-tabs-media-table-edit'>Edit</a>&nbsp;|&nbsp;&nbsp;"+
"<a class='wonderplugin-tabs-media-table-button wonderplugin-tabs-media-table-delete'>Delete</a>&nbsp;|&nbsp;&nbsp;"+"<a class='wonderplugin-tabs-media-table-button wonderplugin-tabs-media-table-moveup'>Move Up</a>&nbsp;|&nbsp;&nbsp;"+"<a class='wonderplugin-tabs-media-table-button wonderplugin-tabs-media-table-movedown'>Move Down</a>"+"</div>"+"<div style='clear:both;'></div>"+"</li>")};$("#wonderplugin-add-tab-htmlcode").click(function(){contentDialog(0,function(items){items.map(function(data){addMediaToList({type:0,
tabtitle:data.tabtitle,tabcontent:data.tabcontent,pageid:-1,tabicon:data.tabicon,tabiconfontawesome:data.tabiconfontawesome,tabiconimage:data.tabiconimage,tabiconimagewidth:data.tabiconimagewidth,tabiconimageheight:data.tabiconimageheight})});updateMediaTable()})});$("#wonderplugin-add-tab-page").click(function(){contentDialog(1,function(items){items.map(function(data){addMediaToList({type:1,tabtitle:data.tabtitle,tabcontent:"",pageid:data.pageid,tabicon:data.tabicon,tabiconfontawesome:data.tabiconfontawesome,
tabiconimage:data.tabiconimage,tabiconimagewidth:data.tabiconimagewidth,tabiconimageheight:data.tabiconimageheight})});updateMediaTable()})});$(document).on("click",".wonderplugin-tabs-media-table-edit",function(){var index=$(this).parent().parent().index();var tab_type=wonderplugin_tabs_config.slides[index].type;contentDialog(tab_type,function(items){if(items&&items.length>0){wonderplugin_tabs_config.slides.splice(index,1);items.map(function(data){wonderplugin_tabs_config.slides.splice(index,0,{type:data.type,
tabtitle:data.tabtitle,tabcontent:data.tabcontent,pageid:data.pageid,tabicon:data.tabicon,tabiconfontawesome:data.tabiconfontawesome,tabiconimage:data.tabiconimage,tabiconimagewidth:data.tabiconimagewidth,tabiconimageheight:data.tabiconimageheight})});updateMediaTable()}},wonderplugin_tabs_config.slides[index],index)});$("#wonderplugin-reverselist").click(function(){wonderplugin_tabs_config.slides.reverse();updateMediaTable()});$(document).on("click",".wonderplugin-tabs-media-table-delete",function(){var $tr=
$(this).parent().parent();var index=$tr.index();wonderplugin_tabs_config.slides.splice(index,1);$tr.remove();$("#wonderplugin-tabs-media-table").find("li").each(function(index){$(this).find(".wonderplugin-tabs-media-table-id").text(index+1);$(this).data("order",index)})});var wonderPluginMediaTableMove=function(i,j){var len=wonderplugin_tabs_config.slides.length;if(j<0)j=0;if(j>len-1)j=len-1;if(i==j){$("#wonderplugin-tabs-media-table").find("li").eq(i).css({top:0,left:0});return}var $tr=$("#wonderplugin-tabs-media-table").find("li").eq(i);
var data=wonderplugin_tabs_config.slides[i];wonderplugin_tabs_config.slides.splice(i,1);wonderplugin_tabs_config.slides.splice(j,0,data);var $trj=$("#wonderplugin-tabs-media-table").find("li").eq(j);$tr.remove();if(j>i)$trj.after($tr);else $trj.before($tr);$("#wonderplugin-tabs-media-table").find("li").each(function(index){$(this).find(".wonderplugin-tabs-media-table-id").text(index+1);$(this).data("order",index);$(this).css({top:0,left:0})})};$(document).on("click",".wonderplugin-tabs-media-table-moveup",
function(){var $tr=$(this).parent().parent();var index=$tr.index();var data=wonderplugin_tabs_config.slides[index];wonderplugin_tabs_config.slides.splice(index,1);if(index==0){wonderplugin_tabs_config.slides.push(data);var $last=$tr.parent().find("li:last");$tr.remove();$last.after($tr)}else{wonderplugin_tabs_config.slides.splice(index-1,0,data);var $prev=$tr.prev();$tr.remove();$prev.before($tr)}$("#wonderplugin-tabs-media-table").find("li").each(function(index){$(this).find(".wonderplugin-tabs-media-table-id").text(index+
1);$(this).data("order",index)})});$(document).on("click",".wonderplugin-tabs-media-table-movedown",function(){var $tr=$(this).parent().parent();var index=$tr.index();var len=wonderplugin_tabs_config.slides.length;var data=wonderplugin_tabs_config.slides[index];wonderplugin_tabs_config.slides.splice(index,1);if(index==len-1){wonderplugin_tabs_config.slides.unshift(data);var $first=$tr.parent().find("li:first");$tr.remove();$first.before($tr)}else{wonderplugin_tabs_config.slides.splice(index+1,0,data);
var $next=$tr.next();$tr.remove();$next.after($tr)}$("#wonderplugin-tabs-media-table").find("li").each(function(index){$(this).find(".wonderplugin-tabs-media-table-id").text(index+1);$(this).data("order",index)})});var defaultSkinOptions=$.extend(true,{},WONDERPLUGIN_TABS_SKIN_OPTIONS);for(var skin in defaultSkinOptions)defaultSkinOptions[skin].skinoptions=$.parseJSON(defaultSkinOptions[skin].skinoptions);var printSkinOptions=function(options){$("#wonderplugin-tabs-width").val(options.width);$("input:radio[name=wonderplugin-tabs-heightmode][value="+
options.heightmode+"]").attr("checked",true);$("#wonderplugin-tabs-height").val(options.height);$("#wonderplugin-tabs-minheight").val(options.minheight);$("#wonderplugin-tabs-extendedheight").attr("checked",options.extendedheight);$("#wonderplugin-tabs-responsive").attr("checked",options.responsive);$("#wonderplugin-tabs-fullwidth").attr("checked",options.fullwidth);$("#wonderplugin-tabs-triggerresize").attr("checked",options.triggerresize);$("#wonderplugin-tabs-disablewpautop").attr("checked",options.disablewpautop);
$("#wonderplugin-tabs-savestatusincookie").attr("checked",options.savestatusincookie);$("#wonderplugin-tabs-accordionmultiple").attr("checked",options.accordionmultiple);$("#wonderplugin-tabs-accordioncloseall").attr("checked",options.accordioncloseall);$("#wonderplugin-tabs-switchonmouseover").attr("checked",options.switchonmouseover);$("#wonderplugin-tabs-keyaccess").attr("checked",options.keyaccess);$("#wonderplugin-tabs-enabletabindex").attr("checked",options.enabletabindex);$("#wonderplugin-tabs-applydisplaynonetohiddenpanel").attr("checked",
options.applydisplaynonetohiddenpanel);$("#wonderplugin-tabs-triggerresizeonload").attr("checked",options.triggerresizeonload);$("#wonderplugin-tabs-triggerresizeonloadtimeout").val(options.triggerresizeonloadtimeout);$("#wonderplugin-tabs-triggerresizetimeout").val(options.triggerresizetimeout);if(options.direction=="horizontal"){$(".wonderplugin-tabs-horizontal-options").css({display:"table-row"});$(".wonderplugin-tabs-vertical-options").css({display:"none"});$("#wonderplugin-tabs-horizontaltabalign").val(options.horizontaltabalign)}else if(options.direction==
"vertical"){$(".wonderplugin-tabs-horizontal-options").css({display:"none"});$(".wonderplugin-tabs-vertical-options").css({display:"table-row"})}$("#wonderplugin-tabs-tabiconposition").val(options.tabiconposition);$("#wonderplugin-tabs-firstid").val(options.firstid);$("#wonderplugin-tabs-fullwidthtabsonsmallscreen").attr("checked",options.fullwidthtabsonsmallscreen);$("#wonderplugin-tabs-fullwidthtabsonsmallscreenwidth").val(options.fullwidthtabsonsmallscreenwidth);$("#wonderplugin-tabs-accordiononsmallscreen").attr("checked",
options.accordiononsmallscreen);$("#wonderplugin-tabs-hidetitleonsmallscreen").attr("checked",options.hidetitleonsmallscreen);$("#wonderplugin-tabs-hidetitleonsmallscreenwidth").val(options.hidetitleonsmallscreenwidth);$("input:radio[name=wonderplugin-tabs-responsivemode][value="+options.responsivemode+"]").attr("checked",true);$("input:radio[name=wonderplugin-tabs-tabarrowmode][value="+options.tabarrowmode+"]").attr("checked",true);$("input:radio[name=wonderplugin-tabs-horizontalarrowwidthsameasheight][value="+
options.horizontalarrowwidthsameasheight+"]").attr("checked",true);$("#wonderplugin-tabs-horizontalarrowwidth").val(options.horizontalarrowwidth);$("#wonderplugin-tabs-arrowprevicon").val(options.arrowprevicon);$("#wonderplugin-tabs-arrownexticon").val(options.arrownexticon);$("#wonderplugin-tabs-dropdownmenutext").val(options.dropdownmenutext);$("#wonderplugin-tabs-dropdownmenuicon").val(options.dropdownmenuicon);$("#wonderplugin-tabs-skincss").val(options.skincss);var options_td=$(".wonderplugin-tabs-skinoptions").find("td");
options_td.empty();for(var key in options.skinoptions){var option_text="<label>"+options.skinoptions[key][2]+"(@"+key+"): ";if(options.skinoptions[key][0]=="align"){option_text+='<select style="margin-left:32px;" name="wonderplugin-tabs-skinoptions-'+key+'" id="wonderplugin-tabs-skinoptions-'+key+'">';option_text+='<option value="left"'+(options.skinoptions[key][1]=="left"?" selected":"")+">Left</option>";option_text+='<option value="center"'+(options.skinoptions[key][1]=="center"?" selected":"")+
">Center</option>";option_text+='<option value="right"'+(options.skinoptions[key][1]=="right"?" selected":"")+">Right</option></select>"}else{option_text+='<input style="margin-left:32px;" ';if(options.skinoptions[key][0]=="color")option_text+='class="wonderplugin-color-field"';if(options.skinoptions[key][0]=="pixel")option_text+=' type="number" class="small-text"';else option_text+=' type="text" class="medium-text"';option_text+='name="wonderplugin-tabs-skinoptions-'+key+'" id="wonderplugin-tabs-skinoptions-'+
key+'" value="'+options.skinoptions[key][1]+'">';if(options.skinoptions[key][0]=="pixel")option_text+="px"}option_text+="</label><br />";options_td.append(option_text);if($.fn.wpColorPicker)$(".wonderplugin-color-field").wpColorPicker()}};$("input:radio[name=wonderplugin-tabs-skin]").click(function(){if($(this).val()==wonderplugin_tabs_config.skin)return;$(".wonderplugin-tab-skin").find("img").removeClass("selected");$("input:radio[name=wonderplugin-tabs-skin]:checked").parent().find("img").addClass("selected");
wonderplugin_tabs_config.skin=$(this).val();wonderplugin_tabs_config=$.extend({},wonderplugin_tabs_config,defaultSkinOptions[$(this).val()]);printSkinOptions(wonderplugin_tabs_config)});$(".wonderplugin-tabs-options-menu-item").each(function(index){$(this).click(function(){if($(this).hasClass("wonderplugin-tabs-options-menu-item-selected"))return;$(".wonderplugin-tabs-options-menu-item").removeClass("wonderplugin-tabs-options-menu-item-selected");$(this).addClass("wonderplugin-tabs-options-menu-item-selected");
$(".wonderplugin-tabs-options-tab").removeClass("wonderplugin-tabs-options-tab-selected");$(".wonderplugin-tabs-options-tab").eq(index).addClass("wonderplugin-tabs-options-tab-selected")})});var updateTabsOptions=function(){wonderplugin_tabs_config.newestfirst=$("#wonderplugin-newestfirst").is(":checked");wonderplugin_tabs_config.name=$.trim($("#wonderplugin-tabs-name").val());wonderplugin_tabs_config.skin=$("input:radio[name=wonderplugin-tabs-skin]:checked").val();wonderplugin_tabs_config.width=
parseInt($.trim($("#wonderplugin-tabs-width").val()));wonderplugin_tabs_config.heightmode=$("input[name=wonderplugin-tabs-heightmode]:checked").val();wonderplugin_tabs_config.height=parseInt($.trim($("#wonderplugin-tabs-height").val()));wonderplugin_tabs_config.minheight=parseInt($.trim($("#wonderplugin-tabs-minheight").val()));wonderplugin_tabs_config.extendedheight=$("#wonderplugin-tabs-extendedheight").is(":checked");wonderplugin_tabs_config.responsive=$("#wonderplugin-tabs-responsive").is(":checked");
wonderplugin_tabs_config.fullwidth=$("#wonderplugin-tabs-fullwidth").is(":checked");wonderplugin_tabs_config.triggerresize=$("#wonderplugin-tabs-triggerresize").is(":checked");wonderplugin_tabs_config.disablewpautop=$("#wonderplugin-tabs-disablewpautop").is(":checked");wonderplugin_tabs_config.savestatusincookie=$("#wonderplugin-tabs-savestatusincookie").is(":checked");wonderplugin_tabs_config.accordionmultiple=$("#wonderplugin-tabs-accordionmultiple").is(":checked");wonderplugin_tabs_config.accordioncloseall=
$("#wonderplugin-tabs-accordioncloseall").is(":checked");wonderplugin_tabs_config.switchonmouseover=$("#wonderplugin-tabs-switchonmouseover").is(":checked");wonderplugin_tabs_config.keyaccess=$("#wonderplugin-tabs-keyaccess").is(":checked");wonderplugin_tabs_config.enabletabindex=$("#wonderplugin-tabs-enabletabindex").is(":checked");wonderplugin_tabs_config.applydisplaynonetohiddenpanel=$("#wonderplugin-tabs-applydisplaynonetohiddenpanel").is(":checked");wonderplugin_tabs_config.triggerresizeonload=
$("#wonderplugin-tabs-triggerresizeonload").is(":checked");wonderplugin_tabs_config.triggerresizeonloadtimeout=parseInt($.trim($("#wonderplugin-tabs-triggerresizeonloadtimeout").val()));wonderplugin_tabs_config.triggerresizetimeout=parseInt($.trim($("#wonderplugin-tabs-triggerresizetimeout").val()));wonderplugin_tabs_config.horizontaltabalign=$("#wonderplugin-tabs-horizontaltabalign").val();wonderplugin_tabs_config.tabiconposition=$("#wonderplugin-tabs-tabiconposition").val();wonderplugin_tabs_config.firstid=
parseInt($.trim($("#wonderplugin-tabs-firstid").val()));wonderplugin_tabs_config.fullwidthtabsonsmallscreen=$("#wonderplugin-tabs-fullwidthtabsonsmallscreen").is(":checked");wonderplugin_tabs_config.fullwidthtabsonsmallscreenwidth=parseInt($.trim($("#wonderplugin-tabs-fullwidthtabsonsmallscreenwidth").val()));wonderplugin_tabs_config.accordiononsmallscreen=$("#wonderplugin-tabs-accordiononsmallscreen").is(":checked");wonderplugin_tabs_config.hidetitleonsmallscreen=$("#wonderplugin-tabs-hidetitleonsmallscreen").is(":checked");
wonderplugin_tabs_config.hidetitleonsmallscreenwidth=parseInt($.trim($("#wonderplugin-tabs-hidetitleonsmallscreenwidth").val()));wonderplugin_tabs_config.responsivemode=$("input[name=wonderplugin-tabs-responsivemode]:checked").val();wonderplugin_tabs_config.tabarrowmode=$("input[name=wonderplugin-tabs-tabarrowmode]:checked").val();wonderplugin_tabs_config.horizontalarrowwidthsameasheight=$("input[name=wonderplugin-tabs-horizontalarrowwidthsameasheight]:checked").val();wonderplugin_tabs_config.horizontalarrowwidth=
parseInt($.trim($("#wonderplugin-tabs-horizontalarrowwidth").val()));wonderplugin_tabs_config.arrowprevicon=$.trim($("#wonderplugin-tabs-arrowprevicon").val());wonderplugin_tabs_config.arrownexticon=$.trim($("#wonderplugin-tabs-arrownexticon").val());wonderplugin_tabs_config.dropdownmenutext=$.trim($("#wonderplugin-tabs-dropdownmenutext").val());wonderplugin_tabs_config.dropdownmenuicon=$.trim($("#wonderplugin-tabs-dropdownmenuicon").val());wonderplugin_tabs_config.skincss=$.trim($("#wonderplugin-tabs-skincss").val());
var options_td=$(".wonderplugin-tabs-skinoptions").find("td");for(var key in wonderplugin_tabs_config.skinoptions){var option_id="#wonderplugin-tabs-skinoptions-"+key;var option_text=options_td.find(option_id);if(option_text.length>0)wonderplugin_tabs_config.skinoptions[key][1]=$.trim(option_text.val())}var transition=[];for(var i=0;i<TRANSITION_EFFECTS.length;i++)if($("#wonderplugin-tabs-effect-"+TRANSITION_EFFECTS[i]).is(":checked"))transition.push(TRANSITION_EFFECTS[i]);wonderplugin_tabs_config.transition=
transition.join(",");wonderplugin_tabs_config.donotinit=$("#wonderplugin-tabs-donotinit").is(":checked");wonderplugin_tabs_config.addinitscript=$("#wonderplugin-tabs-addinitscript").is(":checked");wonderplugin_tabs_config.customcss=$.trim($("#wonderplugin-tabs-customcss").val());wonderplugin_tabs_config.dataoptions=$.trim($("#wonderplugin-tabs-dataoptions").val())};var escapeHTMLString=function(str){return str.replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var previewTabs=function(){updateTabsOptions();
$("#wonderplugin-tabs-preview-container").empty();if(wonderplugin_tabs_config.fullwidth)$("#wonderplugin-tabs-preview-container").css({"max-width":"100%"});else if(wonderplugin_tabs_config.responsive)$("#wonderplugin-tabs-preview-container").css({"max-width":wonderplugin_tabs_config.width+"px"});var previewCode="<div class='wonderplugintabs' id='wonderplugin-tabs-preview'";if(wonderplugin_tabs_config.dataoptions&&wonderplugin_tabs_config.dataoptions.length>0)previewCode+=" "+wonderplugin_tabs_config.dataoptions;
previewCode+="></div>";$("#wonderplugin-tabs-preview-container").html(previewCode);if(wonderplugin_tabs_config.slides.length>0){var tabsid=wonderplugin_tabs_config.id>0?wonderplugin_tabs_config.id:0;$("head").find("style").each(function(){if($(this).data("creator")=="wonderplugintabscreator"+tabsid)$(this).remove()});$("head").find("link").each(function(){if($(this).data("creator")=="wonderplugintabscreator"+tabsid)$(this).remove()});if(wonderplugin_tabs_config.customcss&&wonderplugin_tabs_config.customcss.length>
0){var customcss=wonderplugin_tabs_config.customcss.replace(/TABSID/g,tabsid);$("head").append("<style type='text/css' data-creator='wonderplugintabscreator"+tabsid+"'>"+customcss+"</style>")}if(wonderplugin_tabs_config.skincss&&wonderplugin_tabs_config.skincss.length>0){var skincss=wonderplugin_tabs_config.skincss.replace(/#wonderplugintabs-TABSID/g,"#wonderplugin-tabs-preview");for(var key in wonderplugin_tabs_config.skinoptions){var skinkey="@"+key;var skinval=wonderplugin_tabs_config.skinoptions[key][1];
if(wonderplugin_tabs_config.skinoptions[key][0]=="pixel")skinval+="px";var re=new RegExp(skinkey,"g");skincss=skincss.replace(re,skinval)}$("head").append("<style type='text/css' data-creator='wonderplugintabscreator"+tabsid+"'>"+skincss+"</style>")}var codeheader='<div class="wonderplugintabs-header-wrap"><div class="wonderplugintabs-header-inner-wrap"><ul class="wonderplugintabs-header-ul">';for(var i=0;i<wonderplugin_tabs_config.slides.length;i++){codeheader+='<li class="wonderplugintabs-header-li';
if(i==0)codeheader+=" wonderplugintabs-header-li-first";if(i==wonderplugin_tabs_config.slides.length-1)codeheader+=" wonderplugintabs-header-li-last";codeheader+='">';codeheader+='<div class="wonderplugintabs-header-caption">';if(wonderplugin_tabs_config.slides[i].tabicon=="fontawesome"){if(wonderplugin_tabs_config.slides[i].tabiconfontawesome.length>0)codeheader+='<span class="wonderplugintabs-header-icon-fontawesome '+wonderplugin_tabs_config.slides[i].tabiconfontawesome+'"></span>';if(wonderplugin_tabs_config.tabiconposition==
"top")codeheader+="<br />";if(wonderplugin_tabs_config.slides[i].tabtitle.length>0)codeheader+='<div class="wonderplugintabs-header-title">'+wonderplugin_tabs_config.slides[i].tabtitle+"</div>"}else if(wonderplugin_tabs_config.slides[i].tabicon=="image"){if(wonderplugin_tabs_config.slides[i].tabiconimage.length>0){var img_w=isNaN(wonderplugin_tabs_config.slides[i].tabiconimagewidth)?48:wonderplugin_tabs_config.slides[i].tabiconimagewidth;var img_h=isNaN(wonderplugin_tabs_config.slides[i].tabiconimageheight)?
48:wonderplugin_tabs_config.slides[i].tabiconimageheight;codeheader+='<img class="wonderplugintabs-header-icon-image" src="'+wonderplugin_tabs_config.slides[i].tabiconimage+'" style="width:'+img_w+"px;height:"+img_h+'px;" />'}if(wonderplugin_tabs_config.tabiconposition=="top")codeheader+="<br />";if(wonderplugin_tabs_config.slides[i].tabtitle.length>0)codeheader+='<div class="wonderplugintabs-header-title">'+wonderplugin_tabs_config.slides[i].tabtitle+"</div>"}codeheader+="</div>";codeheader+="</li>"}codeheader+=
"</ul></div></div>";var codepanel='<div class="wonderplugintabs-panel-wrap" style="';if(wonderplugin_tabs_config.heightmode=="fixed")codepanel+="height:"+wonderplugin_tabs_config.height+"px;";else codepanel+="min-height:"+wonderplugin_tabs_config.minheight+"px;";codepanel+='">';for(var i=0;i<wonderplugin_tabs_config.slides.length;i++){codepanel+='<div class="wonderplugintabs-panel';if(i==0)codepanel+=" wonderplugintabs-panel-first";if(i==wonderplugin_tabs_config.slides.length-1)codepanel+=" wonderplugintabs-panel-last";
codepanel+='">';codepanel+='<div class="wonderplugintabs-panel-inner">';if(wonderplugin_tabs_config.slides[i].type==1&&wonderplugin_tabs_config.slides[i].pageid>0){codepanel+='[wonderplugin_tab_page id="'+wonderplugin_tabs_config.slides[i].pageid+'"';if(wonderplugin_tabs_config.disablewpautop)codepanel+=' wpautop="0"';codepanel+="]"}else codepanel+=wonderplugin_tabs_config.slides[i].tabcontent;codepanel+="</div>";codepanel+="</div>"}codepanel+="</div>";var code=wonderplugin_tabs_config.tabposition==
"top"||wonderplugin_tabs_config.tabposition=="left"?codeheader+codepanel:codepanel+codeheader;$("#wonderplugin-tabs-preview").html(code);var jsfolder=$("#wonderplugin-tabs-jsfolder").text();var tabsOptions=$.extend({},WONDERPLUGIN_TABS_SKIN_OPTIONS[wonderplugin_tabs_config["skin"]],{tabsid:tabsid,jsfolder:jsfolder,skinsfoldername:"skins"},wonderplugin_tabs_config);$("#wonderplugin-tabs-preview").wonderplugintabs(tabsOptions)}};var postPublish=function(message){$("#wonderplugin-tabs-publish-loading").hide();
var formnonce=$("#wonderplugin-tabs-saveformnonce").html();var errorHtml="";if(message){errorHtml+="<div class='error'><p>Error message: "+message+"</p></div>";errorHtml+="<div class='error'><p>WordPress Ajax call failed. Please click the button below and save with POST method</p></div>"}else{errorHtml+="<div class='error'><p>WordPress Ajax call failed. Please check your WordPress configuration file and make sure the WP_DEBUG is set to false.</p></div>";errorHtml+="<div class='error'><p>Please click the button below and save with POST method</p></div>"}errorHtml+=
"<form method='post'>";errorHtml+=formnonce;errorHtml+="<input type='hidden' name='wonderplugin-tabs-save-item-post-value' id='wonderplugin-tabs-save-item-post-value' value='"+JSON.stringify(wonderplugin_tabs_config).replace(/"/g,"&quot;").replace(/'/g,"&#39;")+"' />";errorHtml+="<p class='submit'><input type='submit' name='wonderplugin-tabs-save-item-post' id='wonderplugin-tabs-save-item-post' class='button button-primary' value='Save & Publish with Post Method'  /></p>";errorHtml+="</form>";$("#wonderplugin-tabs-publish-information").html(errorHtml)};
var publishTabs=function(){$("#wonderplugin-tabs-publish-loading").show();updateTabsOptions();var wonderplugin_tabs_config_upload=$.extend(true,{},wonderplugin_tabs_config);for(var i=0;i<wonderplugin_tabs_config_upload.slides.length;i++)if(wonderplugin_tabs_config_upload.slides[i]["tabiconfontawesome"])wonderplugin_tabs_config_upload.slides[i]["tabiconfontawesome"]=wonderplugin_tabs_config_upload.slides[i]["tabiconfontawesome"].replace(/&/g,"&amp;");var ajaxnonce=$("#wonderplugin-tabs-ajaxnonce").text();
jQuery.ajax({url:ajaxurl,type:"POST",data:{action:"wonderplugin_tabs_save_config",nonce:ajaxnonce,item:JSON.stringify(wonderplugin_tabs_config_upload)},success:function(data){$("#wonderplugin-tabs-publish-loading").hide();if(data&&data.success&&data.id>=0){wonderplugin_tabs_config.id=data.id;$("#wonderplugin-tabs-publish-information").html("<div class='updated'><p>The tab group has been saved and published: <a href='"+$("#wonderplugin-tabs-viewadminurl").text()+"&itemid="+data.id+"' target='_blank'>View The Tab Group</a></p></div>"+
"<div class='updated'><p>To embed the tab group into your page or post, use shortcode:  [wonderplugin_tabs id=\""+data.id+'"]</p></div>'+"<div class='updated'><p>To embed the tab group into your template, use php code:  &lt;?php echo do_shortcode('[wonderplugin_tabs id=\""+data.id+"\"]'); ?&gt;</p></div>")}else postPublish(data&&data.message?data.message:"")},error:function(){$("#wonderplugin-tabs-publish-loading").hide();postPublish("")}})};var default_options={id:-1,newestfirst:false,name:"My Tabs",
slides:[],transition:"",firstid:0,skin:"horizontaltoptabs",donotinit:false,addinitscript:false,customcss:"",dataoptions:"",savestatusincookie:false,fullwidthtabs:false,accordion:false,accordionmultiple:false,accordioncloseall:false,fullwidthtabsonsmallscreen:false,fullwidthtabsonsmallscreenwidth:480,accordiononsmallscreen:false,applydisplaynonetohiddenpanel:true,keyaccess:false,enabletabindex:false,triggerresizetimeout:10,switchonmouseover:false};var wonderplugin_tabs_config=$.extend({},default_options,
defaultSkinOptions[default_options["skin"]]);var tabsId=parseInt($("#wonderplugin-tabs-id").text());if(tabsId>=0){var config_options=$.parseJSON($("#wonderplugin-tabs-id-config").text());if(!("horizontalarrowwidthsameasheight"in config_options))config_options.horizontalarrowwidthsameasheight="sameheight";if(!("horizontalarrowwidth"in config_options))config_options.horizontalarrowwidth=32;if(!("fullwidthtabsonsmallscreen"in config_options))config_options.fullwidthtabsonsmallscreen=false;if(!("accordiononsmallscreen"in
config_options))config_options.accordiononsmallscreen=false;$.extend(wonderplugin_tabs_config,defaultSkinOptions[config_options["skin"]],config_options);wonderplugin_tabs_config.id=tabsId;wonderplugin_tabs_config.skinoptions=$.extend({},defaultSkinOptions[config_options["skin"]].skinoptions,wonderplugin_tabs_config.skinoptions)}for(var i=0;i<wonderplugin_tabs_config.slides.length;i++){var slideTextOptions=["tabtitle","tabcontent"];for(var j=0;j<slideTextOptions.length;j++)wonderplugin_tabs_config.slides[i][slideTextOptions[j]]=
wonderplugin_tabs_config.slides[i][slideTextOptions[j]].replace(/\\'/g,"'").replace(/\\"/g,'"');var slideBoolOptions=[];for(var j=0;j<slideBoolOptions.length;j++)if(wonderplugin_tabs_config.slides[i][slideBoolOptions[j]]!==true&&wonderplugin_tabs_config.slides[i][slideBoolOptions[j]]!==false)wonderplugin_tabs_config.slides[i][slideBoolOptions[j]]=wonderplugin_tabs_config.slides[i][slideBoolOptions[j]]&&wonderplugin_tabs_config.slides[i][slideBoolOptions[j]].toLowerCase()==="true"}var boolOptions=
["enabletabindex","keyaccess","fullwidthtabs","accordion","accordionmultiple","accordioncloseall","switchonmouseover","savestatusincookie","newestfirst","responsive","fullwidth","applydisplaynonetohiddenpanel","triggerresize","triggerresizeonload","hidetitleonsmallscreen","disablewpautop","extendedheight","donotinit","addinitscript","fullwidthtabsonsmallscreen","accordiononsmallscreen"];for(var i=0;i<boolOptions.length;i++)if(wonderplugin_tabs_config[boolOptions[i]]!==true&&wonderplugin_tabs_config[boolOptions[i]]!==
false)wonderplugin_tabs_config[boolOptions[i]]=wonderplugin_tabs_config[boolOptions[i]]&&wonderplugin_tabs_config[boolOptions[i]].toLowerCase()==="true";var textOptions=["customcss","dataoptions"];for(var i=0;i<textOptions.length;i++)wonderplugin_tabs_config[textOptions[i]]=wonderplugin_tabs_config[textOptions[i]].replace(/\\'/g,"'").replace(/\\"/g,'"');var printConfig=function(){$("#wonderplugin-newestfirst").attr("checked",wonderplugin_tabs_config.newestfirst);$("#wonderplugin-tabs-name").val(wonderplugin_tabs_config.name);
updateMediaTable();$(".wonderplugin-tab-skin").find("img").removeClass("selected");$("input:radio[name=wonderplugin-tabs-skin][value="+wonderplugin_tabs_config.skin+"]").attr("checked",true);$("input:radio[name=wonderplugin-tabs-skin][value="+wonderplugin_tabs_config.skin+"]").parent().find("img").addClass("selected");printSkinOptions(wonderplugin_tabs_config);var transition=wonderplugin_tabs_config.transition.split(",");for(var i=0;i<TRANSITION_EFFECTS.length;i++)$("#wonderplugin-tabs-effect-"+TRANSITION_EFFECTS[i]).attr("checked",
transition.indexOf(TRANSITION_EFFECTS[i])>-1);$("#wonderplugin-tabs-donotinit").attr("checked",wonderplugin_tabs_config.donotinit);$("#wonderplugin-tabs-addinitscript").attr("checked",wonderplugin_tabs_config.addinitscript);$("#wonderplugin-tabs-customcss").val(wonderplugin_tabs_config.customcss);$("#wonderplugin-tabs-dataoptions").val(wonderplugin_tabs_config.dataoptions)};printConfig()})})(jQuery);

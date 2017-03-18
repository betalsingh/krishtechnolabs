jQuery(document).ready(function($) {
    $('#cn_pf_widget')
        .after('<div id="cnnav">')
        .cycle({
            fx:    'fade',
            delay: -3000,
            timeout : 2000,
            pager:  '#cnnav',
            speed:  2000
        });
    $('.mix').hoverDirection();

    $( '#uploadimage' ).on( 'click', function() {
                tb_show('test', 'media-upload.php?type=image&TB_iframe=1');

                window.send_to_editor = function( html ) 
                {
                    imgurl = $( 'img',html ).attr( 'src' );
                    $( '#image' ).val(imgurl);
                    tb_remove();
                }

                return false;
            });

            $( 'input#sidebarUploadimage' ).on('click', function() {
                alert('dsfh');
                tb_show('', 'media-upload.php?type=image&TB_iframe=true');

                window.send_to_editor = function( html ) 
                {
                    imgurl = $( 'img', html ).attr( 'src' );
                    $( '#sidebarimage' ).val(imgurl);
                    tb_remove();
                }

                return false;
            });
});

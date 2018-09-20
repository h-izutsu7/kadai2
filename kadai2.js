$(document).ready(function(){
    $(window).keydown(function(e){

        var mario = $('#mario').attr('src');
        var windowWidth = window.innerWidth;
        var imgWidth = $('#mario').width();
        if ( e.keyCode == 39 ){
			      var imgMargin = parseInt($('#mario').css('margin-left'), 10);
            var addMargin = 20;
            if ( (imgMargin + imgWidth + addMargin) > windowWidth) {
                var margin = windowWidth - mario;
            } else {
                var margin = imgMargin + addMargin;
            }
            // alert(margin);

            if (mario == 'images/mario_1.png' || mario == 'images/mario_4.png') {

                $('#mario').css('margin-left', margin + 'px')
                $('#mario').attr('src', 'images/mario_2.png');
            } else if (mario == 'images/mario_2.png') {

                $('#mario').css('margin-left', margin + 'px')
                $('#mario').attr('src', 'images/mario_3.png');
            } else if (mario == 'images/mario_3.png') {

                $('#mario').css('margin-left', margin + 'px')
                $('#mario').attr('src', 'images/mario_2.png');
            }
        }
        if ( e.keyCode == 37 ){
            var imgMargin = parseInt($('#mario').css('margin-left'), 10);
            if (imgMargin < 20) {
                var margin = 0;
            } else {
                var margin = imgMargin - 20;
            }

            if (mario == 'images/mario_1.png' || mario == 'images/mario_4.png') {

                $('#mario').css('margin-left', margin + 'px')
                $('#mario').attr('src', 'images/mario_5.png');
            } else if (mario == 'images/mario_5.png') {

                $('#mario').css('margin-left', margin + 'px')
                $('#mario').attr('src', 'images/mario_6.png');
            } else if (mario == 'images/mario_6.png') {

                $('#mario').css('margin-left', margin + 'px')
                $('#mario').attr('src', 'images/mario_5.png');
            }
        }
        return false;
    });
    $(window).keyup(function(e){


        var mario = $('#mario').attr('src');

        if ( e.keyCode == 37 ){
            var margin = parseInt($('#mario').css('margin-left'), 10) - 5;
            $('#mario').attr('src', 'images/mario_4.png');
        }
        if ( e.keyCode == 39 ){
            var margin = parseInt($('#mario').css('margin-left'), 10) + 5;
            $('#mario').attr('src', 'images/mario_1.png');
        }
        return false;
    });
});

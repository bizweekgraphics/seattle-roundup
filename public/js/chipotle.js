var main = function() {
    $('.grey').mouseenter(function() {
    	$(this).children('.title').fadeIn(100);
        $(this).children('img').fadeIn(100);
    });

    $('.grey').mouseleave(function() {
        $(this).children('.title').fadeOut(100);
        $(this).children('img').fadeOut(100);
    });

    $('.footnote').mouseover(function(e) {
        var $f = $(e.target).closest('.footnote');  //rolled over footnote
        var $marker = $f.find('.foot-marker');      //footnote position marker
        var $popup = $f.find('.foot-popup');        //footnote popup


        //save the position of the marker for that footnote
        var pos = $marker.position();

        //set the position of the popup to the marker position
        //adjust it a few pixels
        $popup.css({
            top: pos.top - 14 + 'px',
            left: pos.left + 'px'
        });

        //show the popup
        $popup.show();
    });


    $('.footnote').mouseleave(function(e) {
        $('.foot-popup').hide();
    });  

    setTimeout(function() {
        mediaQueries();
    }, 400);
};

var mediaQueries = function() {
    var $name = $('.name');
    if ($(window).width() <= 1020) {
        $('.text_testimony').addClass('clearfix');
        console.log("BAAAAH");
        $name.removeClass('animated reveal fadeIn');
        $('.footnote').mouseleave(function(e) {
            $('.foot-popup').hide();
        });
    }

    

}

$(document).ready(main);
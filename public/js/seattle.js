var $j = jQuery.noConflict();

$j(document).ready(function(){
    var $window = $j(window);
    var $sections = $j('#main section');
    var scrollPos = 0;
    var sectionNum = 0;


    //set order
    $sections.each(function(i) {
        $j(this).css({
            zIndex: $sections.length - i
        });
    });

    //initial resize
    resize();

    //start page at the top
    $j(document).scrollTop(0);

    // scroll the page up with of the height of the page
    setInterval(function() {
        setSectionPositions();

        console.log("Im currently on " + sectionNum);
    }, 60);
    $j(window).on('resize', resize);


    //on window resize
    function resize(e) {
        $j('.scroller').css({
            height: $window.height() * $sections.length + 'px'
        });

        setSectionPositions();
    }

    function setSectionPositions() {
        //current scroll position
        scrollPos = window.pageYOffset;//$j(document).scrollTop();
        //get current slide
        sectionNum = Math.floor(scrollPos / $window.height());

        //get the offset
        $sections.eq(sectionNum).css({
            marginTop: (-1 * (scrollPos - $window.height() * sectionNum)) + 'px',
            opacity: 1
        });

        //force non-current sections to hide
        $sections.each(function(i) {
            // if the section is smaller than move the sections off the window screen
            if(i < sectionNum) {
                $j(this).css({
                    marginTop: - $window.height() + 'px',
                    opacity: 0
                });

                // console.log("WAAAIT " + sectionNum);

            // if the section is greater than move the sections to margin 0 since they are not shown yet.
            } else if(i > sectionNum) {
                $j(this).css({
                    marginTop: '0px',
                    opacity: 0
                });
                // console.log("NOT YET " + sectionNum);
            }
        });
    }



});

(function ($) {
    "use strict";
	jQuery(document).ready(function($){	
	
	// one page nav
	$('#nav').onePageNav({
	    currentClass: 'current',
	    changeHash: true,
	    scrollSpeed: 1500,
	    scrollThreshold: 0.5,
	    filter: ':not(.external)',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function(jQuerycurrentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});	
	
	
  });
 
	/*---------------------
	 statistics-counter
	--------------------- */	
    $('.statistics-counter').counterUp({
        delay: 50,
        time: 3000
    });	

	// jQuery Lightbox
	$('.lightbox').venobox({
		numeratio: true,
		infinigall: true
	});		

    /*-----------------------------
    Loader activation here. 
    -------------------------------*/
    $("#fakeloader").fakeLoader({
        timeToHide:1500, 
        zIndex:999999, 
        spinner:"spinner1",   //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#8bc34a"
    });
	
	/*  Stellar for background scrolling  */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	
	
	/* End Stellar for background scrolling  */	

	 /*  Textrotator */
	if ($('.rotate').length > 0) {
		$(".rotate").textrotator({
			animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
			separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
			speed: 3000 // How many milliseconds until the next word show.
		});
	}
	/* End Textrotator */	
	
	$('.player').mb_YTPlayer();
	
})(jQuery);
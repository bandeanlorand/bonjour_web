// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template */
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Bonjour.
// Author: REEA.
// Version 1.0 - Updated on May 2014
// Website: http://www.reea.net 
// Copyright: (C) 2014
// -------------------------------------------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------------------------------------------------------------
	JS Function Guide
 ---------------------------------------------------------------------------------------------------------------------------------

	01. MENU SCROLL
	02. SIDE MENU
	03. FLEX SLIDER
	04. JPRELOADER
	05. PARALLAX
	06. SINGLE PAGE NAV
	07. TEAM SLIDER
	08. PORTFOLIO ISOTOPE
	09. PORTFOLIO SINGLE
	10. PORTFOLIO SINGLE SLIDER
	11. TESTIMONIALS
	12. CONTACT FORM
	13. WOW ANIMATION
	14. IE 8 FIX CALL 
	15. GENERAL SCROLL
	16. PROGRESS ANIMATION
	17. HEADER FULL SCREEN
	18. HEADER TEXT SLIDER
	19. HEADER ZOOM

// -------------------------------------------------------------------------------------------------------------------------------*/
function validatedata($attr, $defaultValue) {
	if ($attr !== undefined) {
		return $attr
	}
	return $defaultValue;
}

/* ---------------------------------------------------------------------- */
/*	 01. MENU SCROLL FUNCTION start here
/* ---------------------------------------------------------------------- */
var $head = $("header"),current=0;

$(window).scroll(function (e) {
    var value = $(this).scrollTop();
    if (value > 300) {
        if (current==1) return;
        current=1;
        $head.stop();
        $head.addClass("visible");
        $head.css({top: -75});
        $head.animate({
            top: '0'
        },"slow");
    } else {
        if (current==2) return;
        current=2;
        $head.stop().animate({
            top: '0'
        }, "fast",endScrollClass);
    }
});

function endScrollClass() {
    $head.removeClass("visible");
    $head.css('top',0);
}


/* ---------------------------------------------------------------------- */
/*	 01. MENU SCROLL FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	02. SIDE MENU FUNCTION start here
/* ---------------------------------------------------------------------- */
function sideMenu(){
	var windowSize = $(window).width();
	var showRightPush = document.getElementById( 'trigger' ),
		closeBtn = document.getElementById( 'trigger' ),
		menuItems = document.getElementById( 'sideMenu' ),
		body = document.body;

	showRightPush .onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'open' );
		disableOther( 'trigger' );
	};

	closeBtn .onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( showRightPush, 'active' );
		classie.toggle( body, 'open' );
	};

	menuItems .onclick = function() {
	    if (windowSize <= 320) {
			classie.toggle( this, 'active' );
			classie.toggle( showRightPush, 'active' );
			setTimeout(function() {
			  classie.toggle( body, 'open' );
			}, 1500);
			disableOther( 'trigger' );
	    } else {
	        //return false;
	    }
    };

    $(body).removeClass('open');
}
/* ---------------------------------------------------------------------- */
/*	02. SIDE MENU FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	03. FLEX SLIDER FUNCTION start here
/* ---------------------------------------------------------------------- */
function homeHeight(){
	var wh = jQuery(window).height() + 50;
	$('.top_slider, .top_slider .slides li').css('height', wh);
	$('.top_slider, .top_slider .slides .overlay').css('height', wh);
}

function flexCaptionCenter(){
	var wh = $('.top_slider .flex_caption').width() / 2;
	$('.top_slider .flex_caption.center').css('margin-left', -wh);
}

function topSlider() {
	jQuery(window).load(function(){
		//Top Slider
		$('.flexslider.top_slider').flexslider({
			animation: "fade",
			controlNav: false,
			directionNav: true,
			animationLoop: false,
			slideshow: false,
			prevText: "",
			nextText: "",
			sync: "#carousel"
		});

		homeHeight();
		flexCaptionCenter();
		
		jQuery('.flexslider.top_slider .flex-direction-nav').addClass('container');
		
	});

	$(".top_slider .slide").each(function () {
		var $this = $(this);
		var bg = $this.attr("data-bg");

		if (validatedata(bg, false)) {
			$this.css('background-image', 'url("' + bg + '")');
		}
	});
}
/* ---------------------------------------------------------------------- */
/*	03. FLEX SLIDER FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	04. JPRELAODER FUNCTION start here
/* ---------------------------------------------------------------------- */
function jpreloader() {
	$('body').jpreLoader({
		splashID: "#jSplash",
		loaderVPos: '50%',
		autoClose: true,
	});
}
/* ---------------------------------------------------------------------- */
/*	04. JPRELAODER FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	05. PARALLAX FUNCTION start here
/* ---------------------------------------------------------------------- */
function pageParallax() {
	$('.parallax_section').parallax("50%", 0.1);

}
/* ---------------------------------------------------------------------- */
/*	05. PARALLAX FUNCTION end here
/* ---------------------------------------------------------------------- */

function overlayHeight() {
	$('.overlay').each(function(){
		var parentHeight = $(this).parent().height();
		$(this).height(parentHeight);    
	});
}

/* ---------------------------------------------------------------------- */
/*	06. SINGLE PAGE NAV FUNCTION start here
/* ---------------------------------------------------------------------- */
function singlePageNav() {
	var headerHeight = $('header').outerHeight() * 2;
	$('.mainMenu, .sidebarMenu').singlePageNav({
        offset: headerHeight,
        filter: ':not(.external)',
        updateHash: false,
        currentClass: 'active',
        easing: 'easeInOutExpo',
        speed: 1000,
    });
}
/* ---------------------------------------------------------------------- */
/*	06. SINGLE PAGE NAV FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	07. TEAM SLIDER FUNCTION start here
/* ---------------------------------------------------------------------- */
function teamSlide() {
	var teamOwl = $("#teams-slider");
	teamOwl.owlCarousel({
		navigation : true,
		pagination : false,
		slideSpeed : 500,
		navigationText : false,
		items : 4,
		itemsDesktop : [1200,3],
		itemsDesktopSmall : [1000,2],
		itemsTablet: [768,2],
		itemsMobile : [540,1]
	});
}
/* ---------------------------------------------------------------------- */
/*	07. TEAM SLIDER FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	08. PORTFOLIO ISOTOPE FUNCTION start here
/* ---------------------------------------------------------------------- */
function portfolioIsoTope() { 
	// cache container
	var $portfolioContainer = $('.portfolio_list');
	// initialize isotope
	$portfolioContainer.imagesLoaded( function(){
	    $portfolioContainer.isotope({ 
	      masonry: { columnWidth: $portfolioContainer.width() / 4 },
	      filter: '.filteritem',
	      animationOptions: {
	           duration: 750,
	           queue: false
	         }
	       });
	 });

	$(window).smartresize(function(){
		$portfolioContainer.isotope({
			// update columnWidth to a percentage of container width
			masonry: { columnWidth: $portfolioContainer.width() / 4 }
		});
	});

	$('#portfolio_filter a').click(function(event){
		event.stopPropagation();
		  $('#portfolio_filter a').removeClass('active');
		  $(this).addClass('active');
		  var selector = $(this).attr('data-filter');
		  $portfolioContainer.isotope({ 
		    filter: selector ,
		    animationOptions: {
		         duration: 750,
		         queue: false
		       }  
		    });
		  return false;
		});

	$('#portfolio_filter a:first').trigger('click');    
}
/* ---------------------------------------------------------------------- */
/*	08. PORTFOLIO ISOTOPE FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	09. PORTFOLIO SINGLE FUNCTION start here
/* ---------------------------------------------------------------------- */
(function($) {
	$.fn.hasAttr = function(name) {  
			return this.attr(name) !== undefined;
	};	
})(jQuery);

function portfolioLoad() {
    	var portfolioItem = $('.portfolio_list li a');
    		error = "<span class=\"portfolio_error\">Portfolio not exist</span>";
    		loader = "<span class=\"portfolio_loader\">loading...</span>";

    	portfolioItem.click(function() {
    		var href = $(this).attr('href');
    			portfolioContainer = $("#single-portoflio-container");	
    			lightbox = "data-lightbox";
    			
			    if(!$(this).hasAttr(lightbox)) {
			        
	    			if ($(this).children().hasClass("active")) {

	    				return false;

	    			} else {
		    			$('html, body').animate({ scrollTop: portfolioContainer.offset().top -120}, 500);
		    			portfolioContainer.slideUp(1500).addClass("project");

		    			setTimeout(function() {
	    				  portfolioContainer.after(loader);
						  portfolioContainer.empty();
						}, 500);

		    			setTimeout(function() {
		    			portfolioContainer.load(href, function(response, status) {
		    				if (status == "error") {
		    					portfolioContainer.append(error).slideDown(500);
		    				} else {
		    					portfolioContainer.slideDown(500);
		    				}
		    				$(".portfolio_loader").remove();
		    			})
						}, 500);
	    			}

	    		portfolioItem.children().removeClass("active");
	    		$(this).children().addClass("active");
	    		return false;
	    		}
    	});
};

function portfolioClose() {
	var projectNav = $(".portfolio_close");
		portfolioContainer = $("#single-portoflio-container");
		portfolioItem = $('.portfolio_list li a');

		projectNav.click(function() {
			portfolioContainer.slideUp(500);

			setTimeout(function() {
			  portfolioContainer.empty().removeClass("project");
			  portfolioItem.children().removeClass("active");
			}, 500);

			return false;
		});
}

/* ---------------------------------------------------------------------- */
/*	09. PORTFOLIO SINGLE FUNCTION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	10. PORTFOLIO SINGLE SLIDER start here
/* ---------------------------------------------------------------------- */
function owlSingleSlider() {
	$("#portfolio-slider").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
}
/* ---------------------------------------------------------------------- */
/*	10. PORTFOLIO SINGLE SLIDER end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	11. TESTIMONIALS start here
/* ---------------------------------------------------------------------- */
function testimonialsSlider() {
	$("#testimonialsSlider").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay: true,
		navigation: false
	});
}
/* ---------------------------------------------------------------------- */
/*	11. TESTIMONIALS start here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	12. CONTACT FORM start here
/* ---------------------------------------------------------------------- */
function contactForm() {
    var options = {target: "#alert"}
    $("#contact_form").ajaxForm(options);
}
/* ---------------------------------------------------------------------- */
/*	12. CONTACT FORM end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	13. WOW ANIMATION start here
/* ---------------------------------------------------------------------- */
function wowAnimation() {
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       200,          // distance to the element when triggering the animation (default is 0)
        mobile:       false        // trigger animations on mobile devices (true is default)
      }
    );
    wow.init();
}
/* ---------------------------------------------------------------------- */
/*	13. WOW ANIMATION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	14. IE 8 Fix start here
/* ---------------------------------------------------------------------- */
function ie8Fix() {
	//$('.parallax').css({backgroundSize: "cover"});
    $(".social_icons a").corner("17px");
}
/* ---------------------------------------------------------------------- */
/*	14. IE 8 Fix end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	15. GENERAL SCROLL start here
/* ---------------------------------------------------------------------- */
function generalScroll() {
    $('.scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('header').outerHeight() * 2;
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });
}
/* ---------------------------------------------------------------------- */
/*	15. GENERAL SCROLL end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	16. PROGRESS ANIMATION start here
/* ---------------------------------------------------------------------- */
function progressAnimation() {
	$('.progress-bars').appear(function(){
		$('.progress-bar-wrapper .progress .progress-bar').removeClass("anim");
	});
}
/* ---------------------------------------------------------------------- */
/*	16. PROGRESS ANIMATION end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	17. HEADER FULL SCREEN start here
/* ---------------------------------------------------------------------- */
function HeaderFull() {
	$('.alt-header').css({'height':($(window).height() + 75)+'px'});
	$(window).resize(function(){
		$('.alt-header').css({'height':($(window).height() + 75)+'px'});
	});
}
/* ---------------------------------------------------------------------- */
/*	17. HEADER FULL SCREEN end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	18. HEADER TEXT SLIDER start here
/* ---------------------------------------------------------------------- */
function HeaderTextSlider() {
	$('.header-text').flexslider({
		animation: "slide",
		selector: ".text-slider .text-slides",
		slideshowSpeed: 5000,  
		controlNav: false,
		directionNav: false ,
		direction: "vertical",
	});
}
/* ---------------------------------------------------------------------- */
/*	18. HEADER TEXT SLIDER end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	19. HEADER ZOOM start here
/* ---------------------------------------------------------------------- */
function ZoomHeader() {
	$(".zoom-container").find('img').addClass("zoom-in"); // add class
	var tid = setTimeout(zoomLoop, 90000); // set timer

	function zoomLoop() {
	"use strict";
	$(".zoom-container img").fadeOut(2000, function() { // fade out
		$(".zoom-container").find('img').removeClass("zoom-in");
	});
	$(".zoom-container img").fadeIn(1500, function() { // fade in
		$(".zoom-container").find('img').addClass("zoom-in");
	});
	tid = setTimeout(zoomLoop, 90000); // reset timer
	}
}
/* ---------------------------------------------------------------------- */
/*	19. HEADER ZOOM end here
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/*	20. CLIENT SLIDER start here
/* ---------------------------------------------------------------------- */
function clientSlider() {
	$("#clientSlider").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:false,
		autoPlay: true,
		navigation: false,
		itemsCustom : [
	        [0, 2],
	        [500, 2],
	        [700, 3],
	        [1000, 3],
	        [1200, 4],
	        [1400, 4],
	        [1600, 4]
	    ],
	});
}
/* ---------------------------------------------------------------------- */
/*	20. CLIENT SLIDER end here
/* ---------------------------------------------------------------------- */

$(document).ready(function($) {

	'use strict';

	/* ---------------------------------------------------------------------- */
	/*	CALL JS FUNCTIONS
	/* ---------------------------------------------------------------------- */

	/* SIDE MENU CALL */
	sideMenu();
	
	/* GENERAL SCROLL CALL */
	generalScroll();
	
	$(window).resize(sideMenu);

	/* FLEX SLIDER CALL */
	jQuery(function($){
	  if (!$('#home').length) return;
		topSlider();
		homeHeight();
		flexCaptionCenter();
		/* SINGLE PAGE NAV CALL */
    	singlePageNav();

		$(window).resize(function(){
			homeHeight();
			flexCaptionCenter();
		});
	});
	
    /* LOADER CALL */
    jpreloader();

    /* PARALLAX CALL */
    pageParallax();

	/* TEAMS SLIDER CALL */
	teamSlide();

    /* PORTFOLIO ISOTOPE CALL*/
    portfolioIsoTope();

    /* CLIENT SLIDER CALL */
    clientSlider();

    /* SINGLE PORTFOLIO CALL */
    portfolioLoad();

    /* SINGLE PORTFOLIO SLIDER CALL */
    owlSingleSlider();

    /* TESTIMONIALS SLIDER CALL */
    testimonialsSlider();

     /* OVERLAY CALL */
    overlayHeight();
    $(window).resize(overlayHeight);

    /* CONTACT FORM CALL */
    contactForm();

    /* IE 8 FIX CALL */
    ie8Fix();

    /* PROGRESS ANIMATION CALL */
    progressAnimation();

    /* WOW ANIMATION CALL */
    wowAnimation();

    /* HEADER TEXT SLIDER CALL */
    HeaderTextSlider();

    /* HEADER FULL CALL */
    HeaderFull();

    /* ZOOM HEADER CALL */
    ZoomHeader();
});





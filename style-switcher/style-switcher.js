$.stylesheets_default = (function () {
    var stylesheets_default,
        add,
        clear;

    add = function (cssfile) {
        $('head').append('<link class="stylesheets_default" href="' + cssfile + '" rel="stylesheet" />');
        return stylesheets_default;
    };

    clear = function () {
        $('head link[class=switch_default]').remove();
		$('body').removeClass("preview-boxed");	  
		$(window).resize();
        return stylesheets_default;
    };
	
    return stylesheets_default = {
        add: add,
        clear: clear
    };
} ());

$.stylesheets_inverse = (function () {
    var stylesheets_inverse,
        add,
        clear;

    add = function (cssfile) {
        $('head').append('<link class="switch_inverse" href="' + cssfile + '" rel="stylesheet" />');
        return stylesheets_inverse;
    };

    clear = function () {
        $('head link[class=switch_inverse]').remove();
		$('body').removeClass("preview-boxed");	  
		$(window).resize();
        return stylesheets_inverse;
    };
	
    return stylesheets_inverse = {
        add: add,
        clear: clear
    };
} ());



$(document).ready(function (){  
	function is_touch_device() {
	  return !!('ontouchstart' in window) // works on most browsers 
		  || !!('onmsgesturechange' in window); // works on ie10
	};
	
	if ( !is_touch_device() && $(window).width() > 920) {
			
			 
		} else {
			$('.style-switcher').css("display","none");
			 }

});

$(window).load(function() {

	$(window).scroll(function() {
		var headerHeight = $("header").height()
		 	scrollTopVal = $(window).scrollTop();

		 	topVal = scrollTopVal;

		if ( topVal >= headerHeight) {
			$(".style-switcher").animate({opacity : "1"}, 100);
		} else
		if ( topVal < headerHeight && $(".ss-header").hasClass("ss-header-open")) {
			$(".style-switcher").animate({opacity : "1"}, 100);
		} else {
			$(".style-switcher").animate({opacity : "0.5"}, 100);
		}
	});

});


$(window).ready(function(){
  $('.ss-open').click(function () {
	  $('.ss-open i').toggleClass("fa fa-chevron-up fa fa-chevron-down");
	  $('.ss-header').toggleClass("ss-header-open");
	  $(window).scroll();
	  $('.ss-body').slideToggle();
	  return false;
  });
  
$('#ss-boxed a').click(function() {
    $('body').addClass("preview-boxed");	  
	$(window).resize();
	return false;	  
})
  
$('#ss-wide a').click(function() {
    $('body').removeClass("preview-boxed");		  
	$(window).resize();
	return false;
});


$('.ss-color.default li span').click(function() {
	$('.ss-color.default li').removeClass('ssd-active');
	$(this).parent().addClass('ssd-active');
});
  
$('.ss-color.default span').click(function () {
	$('head link[class=stylesheets_default]').remove();
	$.stylesheets_default.add($(this).attr('rel'));
	return false;
});

	$('.ss-color.inverse li span').click(function() {
		$('.ss-color.inverse li').removeClass('ssi-active');
		$(this).parent().addClass('ssi-active');
	});
	  
	$('.ss-color.inverse span').click(function () {
		$('head link[class=switch_inverse]').remove();
		$.stylesheets_inverse.add($(this).attr('rel'));
		return false;
	});	
	   
});




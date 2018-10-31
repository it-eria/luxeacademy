$(function ($) {

// Acc
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});



    $(window).on('resize', function(){
    if($(window).width() > 992){
        $('.bl-post:first-child').removeClass('col-lg-4').addClass('col-8');
        $('.bl-post:first-child').css({
            "height": ($('.bl-post:last-child').height()) * 2 + 24 + 'px'
        });
    }
});

if($(window).width() > 992){
    $('.bl-post:first-child').removeClass('col-lg-4').addClass('col-8');
    $('.bl-post:first-child').css({
        "height": ($('.bl-post:last-child').height()) * 2 + 24 + 'px'
    });
}

    $('#procent-progress').prepend($('.progress-main').attr('value'));
    $('.mask').css({
        "height": $('.program-item').height() - $('.h2-program-title').height() + 'px'
    });

    $('.fall-effect').mouseenter(function () {
        $(this).find('.mask').css({
            "top": $('.h2-program-title').height() + 'px'
        });
    }).mouseleave(function () {
        $(this).find('.mask').css({
            "top": "0"
        });
    });

    $('.nav_wrapper').css({
        'margin-top': $('.header-info-line').height() + 20 + 'px'
    });

    $(window).on('resize', function () {
        $('.nav_wrapper').css({
            'margin-top': $('.header-info-line').height() + 20 + 'px'
        });
    });

    $('#fix-menu-padding').css({
        "padding-bottom": ($('.nav_wrapper').height() * 2) + $('.header-info-line').height() - 10 + 'px'
    });

    if ($(window).width() < 768) {
        $('#fix-menu-padding').css({
            "padding-bottom": $('.nav_wrapper').height() * 2 + 'px'
        });
    }

    $("ul li:has(ul)").addClass("has-submenu");
    $("ul li ul").addClass("sub-menu");
    $("ul.dropdown li").hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover")
    });
    var $menu = $("#menu"), $menulink = $("#spinner-form"), $search = $("#search"), $search_box = $(".search_box"),
        $menuTrigger = $(".has-submenu > a");
    $menulink.click(function (e) {
        $menulink.toggleClass("active");
        $menu.toggleClass("active");
        if ($search.hasClass("active")) {
            $(".menu.active").css("padding-top", "50px")
        }
    });
    $search.click(function (e) {
        e.preventDefault();
        $search_box.toggleClass("active")
    });
    $menuTrigger.click(function (e) {
        e.preventDefault();
        var t = $(this);
        t.toggleClass("active").next("ul").toggleClass("active")
    });
    $("ul li:has(ul)");
    $(function () {
        var e = $(document).scrollTop();
        var t = $(".nav_wrapper").outerHeight();
        $(window).scroll(function () {
            var n = $(document).scrollTop();
            if ($(document).scrollTop() >= 50) {
                $(".nav_wrapper").css("position", "fixed")
            } else {
                $(".nav_wrapper").css("position", "fixed")
            }
            if (n > t) {
                $(".nav_wrapper").addClass("scroll")
            } else {
                $(".nav_wrapper").removeClass("scroll")
            }
            if (n > e) {
                $(".nav_wrapper").removeClass("no-scroll")
            } else {
                $(".nav_wrapper").addClass("no-scroll")
            }
            e = $(document).scrollTop()
        })
    })

$('.slider-wrap').slick({
    dots: false,
    infinite: true,
    speed: 700,
    fade: true,
    arrows: true,
    autoplay: true,
    nextArrow: '<img class="slick-next slick-arrow" src="assets/img/right-arrow.png" />',
    prevArrow: '<img class="slick-prev slick-arrow" src="assets/img/left-arrow.png" />',
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});

var slickParameters = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    focusOnSelect: true
};

//tab 1
function slickUnslicktab1() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        if (!$('.all-posts-container').hasClass('slick-slider')) {
            $('.all-posts-container').slick(slickParameters);
        }
    } else {
        if ($('.all-posts-container').hasClass('slick-slider')) {
            $('.all-posts-container').slick('unslick');
        }
    }
}
slickUnslicktab1();
//end tab1


function slickUnslickCategory() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        if (!$('.courses-wrapper').hasClass('slick-slider')) {
            $('.courses-wrapper').slick(slickParameters);
        }
    } else {
        if ($('.courses-wrapper').hasClass('slick-slider')) {
            $('.courses-wrapper').slick('unslick');
        }
    }
}
slickUnslickCategory();

function slickUnslickBlogPosts() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        if (!$('.all-posts-container').hasClass('slick-slider')) {
            $('.all-posts-container').slick(slickParameters);
        }
    } else {
        if ($('.all-posts-container').hasClass('slick-slider')) {
            $('.all-posts-container').slick('unslick');
        }
    }
}
slickUnslickBlogPosts();



if($('.courses-wrapper').hasClass('unclick-slider-event')) {
    if ($('.courses-wrapper').hasClass('slick-slider')) {
        $('.courses-wrapper').slick('unslick');    }
}

function slickUnslickPrograms() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        if (!$('.programs-wrapper').hasClass('slick-slider')) {
            $('.programs-wrapper').slick(slickParameters);
        }
    } else {
        if ($('.programs-wrapper').hasClass('slick-slider')) {
            $('.programs-wrapper').slick('unslick');
        }
    }
}
slickUnslickPrograms();

function slickUnslickPosts() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        if (!$('.recent-slider-mob').hasClass('slick-slider')) {
            $('.recent-slider-mob').slick(slickParameters);
        }
    } else {
        if ($('.recent-slider-mob').hasClass('slick-slider')) {
            $('.recent-slider-mob').slick('unslick');
        }
    }
}
slickUnslickPosts();
var accordion = (function(){  
    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');
   
    // default settings 
    var settings = {
      // animation speed
      speed: 400,
      
      // close all other accordion items if true
      oneOpen: false
    };
      
    return {
      // pass configurable object literal
      init: function($settings) {
        $accordion_header.on('click', function() { 
          accordion.toggle($(this));
        });
        
        $.extend(settings, $settings); 
        
        // ensure only one accordion is active if oneOpen is true
        if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
          $('.js-accordion-item.active:not(:first)').removeClass('active');
        }
        
        // reveal the active accordion bodies
        $('.js-accordion-item.active').find('> .js-accordion-body').show();
      },
      toggle: function($this) {
              
        if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
          $this.closest('.js-accordion')
                 .find('> .js-accordion-item') 
                 .removeClass('active')
                 .find('.js-accordion-body')
                 .slideUp()
        }
        
        // show/hide the clicked accordion item
        $this.closest('.js-accordion-item').toggleClass('active');
        $this.next().stop().slideToggle(settings.speed);
      }
    }
})(jQuery);

$(document).ready(function(){
    accordion.init({ speed: 300, oneOpen: true });
  });

// Init AOS
AOS.init();








})(jQuery);








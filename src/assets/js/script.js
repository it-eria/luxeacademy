$(function () {
   

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
});

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
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    focusOnSelect: true
};


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
        if (!$('.recent-posts-container__wrapper').hasClass('slick-slider')) {
            $('.recent-posts-container__wrapper').slick(slickParameters);
        }
    } else {
        if ($('.recent-posts-container__wrapper').hasClass('slick-slider')) {
            $('.recent-posts-container__wrapper').slick('unslick');
        }
    }
}

slickUnslickPosts();

// Init AOS
AOS.init();
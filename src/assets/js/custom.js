/*
Theme Name: Libo - MULTIPURPOSE Angular Template.
Author: Webtend
Author URL: https://themeforest.net/user/webtend/portfolio
Version: 1.0.0
*/
(function($) {
    'use strict';
    // custom-select
    $(document).ready(function() {
        $('.custom-select').niceSelect();
    });
    $(document).ready(function() {
        $('[data-tooltip="tooltip"]').tooltip();
    });
    // General
    $(".hamburger-btn").click(function() {
        $(".menu-btn").toggleClass("active");
        $(".main-nav").toggleClass("active");
        $('html').toggleClass('overflow');
    });
    $(".search").click(function() {
        $("#search-popup").addClass("active");
        $("#body-overlay").addClass("active");
    });
    $("#body-overlay").click(function() {
        $("#search-popup").removeClass("active");
        $("#body-overlay").removeClass("active");
    });
    // Navigation fix
    $(window).scroll(function() {
        var sticky = $('.header'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    })
    // Navigation
    $('.menu-item-has-children>a').on('click', function() {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul.sub-menu').slideUp();
        } else {
            element.addClass('open');
            element.children('ul.sub-menu').slideDown();
            element.siblings('li').children('ul.sub-menu').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul.sub-menu').slideUp();
        }
    });
    $('.menu-item-has-children>a').append('<span class="arrow"></span>');
    // main-slider
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        asNavFor: '.main-slider-nav'
    });
    // main-slider-nav
    $('.main-slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: false,
        cssEase: 'linear',
        focusOnSelect: true,
        asNavFor: '.main-slider'
    });
    $('.count-section').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.count').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });
    $(this).find('.count').each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 4000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    $('.skill-progress-bar').bind('inview', function(
        event,
        visible,
        visiblePartX,
        visiblePartY
    ) {
        if (visible) {
            $.each($('div.progressbar'), function() {
                $(this).css('width', $(this).attr('data-width') + '%');
            });
            $(this).unbind('inview');
        }
    });
    $('.custom-progress-bar').bind('inview', function(
        event,
        visible,
        visiblePartX,
        visiblePartY
    ) {
        if (visible) {
            $.each($('div.progressbar'), function() {
                $(this).css('width', $(this).attr('data-width') + '%');
            });
            $(this).unbind('inview');
        }
    });
    // on click Video 
    $(document).on('click', '.js-videoPoster', function(e) {
        e.preventDefault();
        var poster = $(this);
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });

    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        var src = iframe.data('src');
        wrapper.addClass('videoWrapperActive');
        iframe.attr('src', src);
    }
    // slider-gallery
    $('.slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '30%',
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerPadding: '25%',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '18%',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 400,
                settings: {
                    centerPadding: '0%',
                }
            }
        ]
    });
    // brand-slider
    $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // testimonial-slider
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // service-slider
    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // case-study-slider
    $('.case-study-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // team-slider
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // blog-slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // main-slider-3
    $('.main-slider-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }]
    });
    // image-slider-gallery
    $('.image-slider-gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        variableWidth: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }]
    });
    // blog-post-slider
    $('.blog-post-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear'
    });
    // related-post
    $('.related-post').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // shop-detail-slider
    $('.shop-detail-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        cssEase: 'linear',
        asNavFor: '.shop-slider-nav'
    });
    // shop-slider-nav
    $('.shop-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        cssEase: 'linear',
        focusOnSelect: true,
        asNavFor: '.shop-detail-slider'
    });
    // project-gallery
    $('.project-gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // project-related
    $('.project-related').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // bar chart
    $(function() {
        if ($('div').is('#bar-chart')) {
            new Morris.Bar({
                element: 'bar-chart',
                data: [
                    { y: 'Jan', a: 4000, b: 4600 },
                    { y: 'Feb', a: 4100, b: 3800 },
                    { y: 'Mar', a: 3300, b: 3600 },
                    { y: 'Apr', a: 2700, b: 2900 },
                    { y: 'May', a: 3600, b: 3800 },
                    { y: 'Jun', a: 2800, b: 2600 }
                ],
                xkey: 'y',
                ykeys: ['a', 'b'],
                barColors: ["#800000", "#131f2b"],
                labels: ['Profit', 'Growth'],
                hideHover: 'always',
                resize: true,
            });
        }
    });
    // Price range
    $(function() {
        $("#shop-range-price").slider({
            range: true,
            min: 0,
            max: 1200,
            thousand: ',',
            values: [500, 1000],
            slide: function(event, ui) {
                $("#shop-price").val("$" + ui.values[0]);
                $("#shop1-price").val("$" + ui.values[1]);
            }
        });
        $("#shop-price").val("$" + $("#shop-range-price").slider("values", 0));
        $("#shop1-price").val("$" + $("#shop-range-price").slider("values", 1));
    });
    // quantity
    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
        $input.val(value);
    });
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);
    });
    // back to top
    var offset = 220;
    var duration = 500;
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > offset) {
            $('.back-top').fadeIn(duration);
        } else {
            $('.back-top').fadeOut(duration);
        }
    });
    $('.back-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
    });
    if ($(window).scrollTop() > offset) {
        $('.back-top').fadeOut(0);
    }
    $('a[href="#"]').click(function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    });
})(jQuery);
/* Theme Name: Montia - Responsive Landing Page Template
   Author: Themesbrand
   Version: 1.0.0
   File Description: Main JS file of the template
*/

! function($) {
    "use strict";

    var MontiaApp = function() {};

    //scroll
    MontiaApp.prototype.initNavbarStickey = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".sticky").addClass("darkheader");
            } else {
                $(".sticky").removeClass("darkheader");
            }
        });
    },

    MontiaApp.prototype.initMagnificPopup = function() {
        $('.video-play-icon-trigger').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    MontiaApp.prototype.initNavbarToggler = function() {
        var scroll = $(window).scrollTop();

        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

        $('.menu-arrow,.submenu-arrow').on('click', function(e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    },

    MontiaApp.prototype.initTestimonialSlider = function() {
        $('#owl-demo').owlCarousel({
            items: 1,
            autoplay: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1]
        });
    },
    
    MontiaApp.prototype.initTeamslider = function() {
        $('#team').owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
    },
    
    MontiaApp.prototype.initSmoothLink = function() {
        $('.navigation-menu a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    MontiaApp.prototype.initScrollspy = function() {
        $("#navigation").scrollspy({
            offset: 50
        });
    },    

    MontiaApp.prototype.init = function() {
        this.initNavbarStickey();
        this.initMagnificPopup();
        this.initNavbarToggler();
        this.initTestimonialSlider();
        this.initTeamslider();
        this.initSmoothLink();
        this.initScrollspy();
    },
    //init
    $.MontiaApp = new MontiaApp, $.MontiaApp.Constructor = MontiaApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.MontiaApp.init();
}(window.jQuery);
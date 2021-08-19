$(document).ready(function () {

    $(window).on('load', function () {
        $('.preloader').addClass('complete');
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element", {
        strings: ["Riley Bergamasco", "a Developer", "a Designer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // progress bars - skills

    // var waypoint = new Waypoint({
    //     element: document.getElementById('exp-id'),
    //     handler: function(direction) {
    //         var p = document.querySelectorAll('.progress-bar');
    //         p[0].setAttribute("style", "width: 100%; transition: 1s all")
    //         p[1].setAttribute("style", "width: 90%; transition: 1.3s all")
    //         p[2].setAttribute("style", "width: 85%; transition: 1.7s all")
    //         p[3].setAttribute("style", "width: 70%; transition: 2s all")
    //         p[4].setAttribute("style", "width: 90%; transition: 2.3s all")
    //         p[5].setAttribute("style", "width: 80%; transition: 2.7s all")
    //         p[6].setAttribute("style", "width: 60%; transition: 2.7s all")
    //     },
    //     offset:'90%'
    // });

    // owl carousel - testmony

    // $(".owl-carousel").owlCarousel({
    //     loop:true,
    //     autoplay:true,
    //     autoplayTiemout:4000,
    //     items:1
    // });

    // work section

    var filterizd = $('.filter-container').filterizr({
        animationDuration: .5
    });

});
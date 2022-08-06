$(document).ready(function(){
    //heroslider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText : ['PREV','NEXT'],
        responsive:{
            0:{
               nav: false,
            },
            768: {
                nav:true,
            }
        }
    })

    //PROJECT slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        navText: ["PREV","NEXT"],
        responsive:{
            0:{
               items: 1, 
               nav: false,
               margin: 0,
            },
            768: {
                items: 2,
               
            },
            1140: {
                items: 2,
                center: true,
                dots:true,
            }
        }
    })
    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
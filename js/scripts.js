$(document).ready(function() { 


//mobile menu
$(".burger").on('click', function() {
		$(this).toggleClass('opened');
    $(".h_block").slideToggle(200, function() {
        if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
        }
    });
});

//green_line_close
$(".gl_close").click(function() {
    $(".green_line").hide();
});

//Прокрутка по якорям
$('.ancLinks').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 700);
    e.preventDefault();
});

// styled scroll
$(".b4_items_scroll").niceScroll({cursorcolor:"#fff", cursorwidth : "7px", cursorborderradius:"0"  });

//tabs
$(".tab_item").not(":first").hide();
$(".tabs_block .tab").click(function() {
    $(".tabs_block .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tab_item_2").not(":first").hide();
$(".tabs_block_2 .tab_2").click(function() {
    $(".tabs_block_2 .tab_2").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item_2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


//video hide controls
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
});


//show full comments
$(".rsb_all").click(function() {
    $(this).siblings(".rsb_text").toggleClass("full");
});

$(".ts_all").click(function() {
    $(this).siblings(".ts_text").toggleClass("full");
});


//faq
$(".fi_head").click(function() {
    $(this).parent(".faq_item").toggleClass("opened");
    $(this).siblings(".fi_text").slideToggle(200);
});



//owl sliders
$('.main_slider').addClass('owl-carousel');
$('.main_slider').owlCarousel({
    center: false,
    items: 4,
    loop: false,
    margin: 18,
    autoWidth: false,
    responsive: {
        0: {
            items: 1,
        },
        420: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1280: {
            items: 4,
        },
    }
});


$('.cat_slider').addClass('owl-carousel');
$('.cat_slider').owlCarousel({
    center: false,
    items: 4,
    loop: false,
    margin: 18,
    mouseDrag: false,
    touchDrag: false,
    autoWidth: false,
    responsive: {
        0: {
            items: 1,
        },
        420: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1280: {
            items: 4,
        },
    }
});

$('.cat_slider_inner').addClass('owl-carousel');
$('.cat_slider_inner').owlCarousel({
    center: false,
    items: 1,
    loop: false,
    autoWidth: false,
});

$('.rev_slider').addClass('owl-carousel');
$('.rev_slider').owlCarousel({
    center: false,
    items: 3,
    loop: false,
    margin: 18,
    autoWidth: false,
    responsive: {
        0: {
            items: 1,
        },
        720: {
            items: 2,
            margin: 10,
        },
        1400: {
            items: 3,
        },
    }
});

$('.city_slider').addClass('owl-carousel');
$('.city_slider').owlCarousel({
    center: false,
    loop: false,
    items: 5,
    margin: 15,
    autoWidth: false,
    responsive: {
        0: {
            items: 1,
        },
        420: {
            items: 2,
        },
        550: {
            items: 3,
        },
        1000: {
            items: 4,
        },
        1280: {
            items: 5,
        },
    }
});

$('.team_slider').addClass('owl-carousel');
$('.team_slider').owlCarousel({
    center: false,
    loop: false,
    items: 3,
    margin: 18,
    autoWidth: false,
    responsive: {
        0: {
            items: 1,
        },
        580: {
            items: 2,
        },
        1280: {
            items: 3,
        },
    }
});

$('.products_slider').addClass('owl-carousel');
$('.products_slider').owlCarousel({
    center: false,
    loop: true,
    smartSpeed: 1000,
    items: 1,
    // responsive: {
    //     0: {
    //         items: 1,
    //     },
    //     580: {
    //         items: 2,
    //     },
    //     1280: {
    //         items: 3,
    //     },
    // }
});

//wow js
new WOW().init();

$(".products_slider .owl-next, .products_slider .owl-prev").click(function() {
    new WOW().init();
});





});
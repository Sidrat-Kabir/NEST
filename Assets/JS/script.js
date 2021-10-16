$(function(){
    
    $('.top_header_slide').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 800
    })

    $('.banner_wrapper').slick({
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<i class='fas fa-chevron-left banner_icon slider_icon'></i>",
        nextArrow: "<i class='fas fa-chevron-right banner_icon slider_icon'></i>",
        dots: true,     
    })

    $('.feature_slider').slick({
        slidesToShow: 10,
        prevArrow: "<i class='fas fa-arrow-left slider_icon feature_icon'></i>",
        nextArrow: "<i class='fas fa-arrow-right slider_icon feature_icon'></i>",
    })
})

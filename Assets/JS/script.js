$(function(){
    
    $('.top_header_slide').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 500
    })

    $('.banner_wrapper').slick({
        fade: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<i class='fas fa-chevron-left banner_icon'></i>",
        nextArrow: "<i class='fas fa-chevron-right banner_icon'></i>",
        dots: true,     
    })
})
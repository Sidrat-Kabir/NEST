$(function(){

    //preloader
    
    $(window).on('load',function(){
        $('.preloader').fadeOut(1000);
    })

    //sticky menu
   $(window).on('scroll',function(){
        var scrollposition = $(window).scrollTop();

        if(scrollposition>100){
            $('.main_header').addClass('sticky_nav')
        }else{
            $('.main_header').removeClass('sticky_nav');
        }
        
        //back to top
        
        if(scrollposition>600){
            $('#backto_top').fadeIn(300);                
        }else{
            $('#backto_top').fadeOut(300);            
        }
   })
    $('#backto_top').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },900)
    })

    //top header slider
    $('.top_header_slide').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 900
    })

    //main banner slider
    $('.banner_wrapper').slick({
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<i class='fas fa-chevron-left banner_icon slider_icon'></i>",
        nextArrow: "<i class='fas fa-chevron-right banner_icon slider_icon'></i>",
        dots: true,     
    })

    //feature section slider
    $('.feature_slider').slick({
        slidesToShow: 10,
        prevArrow: "<i class='fas fa-arrow-left slider_icon feature_icon'></i>",
        nextArrow: "<i class='fas fa-arrow-right slider_icon feature_icon'></i>",
    })
    
    //daily best sell section slider
    $('.daily_slider').slick({
        slidesToShow: 4,
        SlidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        speed: 800,
        prevArrow: "<i class='fas fa-arrow-left slider_icon daily_icon'></i>",
        nextArrow: "<i class='fas fa-arrow-right slider_icon daily_icon'></i>",
    })

    //deals
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime('<ul class="d-flex"><li class="w-25"><span>%D</span><span>Days</span></li><li class="w-25"><span>%H</span><span>Hours</span></li><li class="w-25"><span>%M</span><span>Mins</span></li><li class="w-25"><span>%S</span><span>Sec</span></li></ul>'));
        });
    })
})

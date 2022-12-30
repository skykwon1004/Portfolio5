$(function () {


    $('.main_slide').on('init afterChange', function (e, s, c) {
        var currnet = $('.main_slide .slick-current');
        currnet.addClass('on').siblings().removeClass('on');
    })

    // mainSlide
    $('.main_slide').slick({
        // slidesToShow: 2,
        fade: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .arrows i:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .arrows i:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    


    $('.main_new').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: false,
    });

    $('.news_arrows i:first-child').on('click', function () {
        $('.main_new').slick('slickPrev')
    });

    $('.news_arrows i:last-child').on('click', function () {
        $('.main_new').slick('slickNext')
    });



    // hero_tab
    $('.left_slide').slick({
        fade: true,
        arrows: false,
    });



    $('.left_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_hero .right_tab .itm').eq(c).addClass('on').siblings().removeClass('on');

    });

    $('.hero_arrows i:first-child').on('click', function () {
        $('.left_slide').slick('slickPrev')
    });

    $('.hero_arrows i:last-child').on('click', function () {
        $('.left_slide').slick('slickNext')
    });

    AOS.init();


})
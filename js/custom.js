$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    const MajorSlide = new Swiper ('.major_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
    });

    const BannerSlide = new Swiper ('.banner_slide', {
        loop: true,
    });

    $('.footer .family').on('click', function () {
        $('.footer .family_list').toggleClass('on');
    })
})
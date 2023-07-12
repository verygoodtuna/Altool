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
        navigation: {
            prevEl: '.page_btn .left',
            nextEl: '.page_btn .right',
        },
        pagination: {
            el: ".page_num",
            type: "fraction",
        },
    });

    $('.main_egg .inner ul').slick({
        slidesToShow: 8,
    })

    const BannerSlide = new Swiper ('.banner_slide', {
        loop: true,
        navigation: {
            prevEl: '.page_btn .left',
            nextEl: '.page_btn .right',
        },
        pagination: {
            el: ".page_num2",
            type: "fraction",
        },
    });

    $('.footer .family').on('click', function () {
        $('.footer .family_list').toggleClass('on');
    })
})
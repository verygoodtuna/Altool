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
            autoplayStart: '.page_play .play',
            autoplayStop: '.page_play .pause',
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

    $('.page_btn .page_play span::before').on('click', function () {
        $('.page_btn .page_play span::before').addClass('on')
    })

    $('.page_play span::before').on('click', function () {
        $('.page_play span::after').addClass('on')
    })

    $('.main_egg .inner ul').slick({
        slidesToShow: 8,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            }
        ]
    })



    const BannerSlide = new Swiper ('.banner_slide', {
        loop: true,
        navigation: {
            prevEl: '.page_btn .left',
            nextEl: '.page_btn .right',
        },
        pagination: {
            el: ".page_num02",
            type: "fraction",
        },
    });

    $('.footer .family').on('click', function () {
        $('.footer .family_list').toggleClass('on');
    })
})
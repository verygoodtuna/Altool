$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    // const body = document.getElementsByTagName('.gnb')[0];
    // body.classList.add('scrollLock');

    $('.mobil_btn .btn').on('click', function (){
        $('.header .gnb').toggleClass('on');
        $('.header .login').toggleClass('on');
    })

    $('.header .lnb_btn01').on('click', function () {
        $('.header .gnb .menu').toggleClass('on');
    })

    $('.header .lnb_btn02').on('click', function () {
        $('.header .gnb .list').toggleClass('on');
    })

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


    // $('.gnb').on('wheel', function (e) {
    //     if ($('.gnb').hasClass('on')) {
    //         e.preventDefault();
    //     }
    // })

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.lnb').stop().slideUp();
        }
    });
})
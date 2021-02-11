new Swiper('.slider-about-as', {
    slidesPerView: 1.4,
    centeredSlides: true,
    grabCursor: true,
    breakpoints: {
        1920:{
            slidesPerView: 1.65,
        },
        1680:{
            slidesPerView: 1.45,
        },
        1600:{
            slidesPerView: 1.4,
        },
        1440:{
            slidesPerView: 1.25,
        },
        1366:{
            slidesPerView: 1.25,
        },
        1280:{
            slidesPerView: 1.17,
        },
        414:{
            slidesPerView: 1.14,
        },
        393:{
            slidesPerView: 1.08,
            initialSlide:0,
        },
    }
}),

new Swiper('.tour-slider', {
    slidesPerView: 4.8,
    centeredSlides: true,
    initialSlide:1,
    breakpoints: {
        1920:{
            slidesPerView: 4.8,
        },
        1600:{
            slidesPerView: 4.8,
        },
        1440:{
            slidesPerView: 4.3,
        },
        1366:{
            slidesPerView: 4.1,
        },
        1280:{
            slidesPerView: 3.85,
        },
        414:{
            slidesPerView: 1.3,
            initialSlide:0,
        },
        393:{
            slidesPerView: 1.2,
            initialSlide:0,
        },
    }
})
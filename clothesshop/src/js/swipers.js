new Swiper('.assortment__swiper',{
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    slidesPerView: 4,
    slidesPerGroup: 1,
    simulateTouch: false
});

new Swiper('.swiper',{
    navigation: {
        nextEl:'.partners__swiper-button-next',
        prevEl:'.partners__swiper-button-prev'
    },
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: -30,
    simulateTouch: false,
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        1000:{
            slidesPerView: 3
        }
    }
});
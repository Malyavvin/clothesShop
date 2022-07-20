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

new Swiper('.partners__swiper',{
    navigation: {
        nextEl:'.partners__swiper-button-next',
        prevEl:'.partners__swiper-button-prev'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: -30,
    simulateTouch: false,
    breakpoints: {
        280:{
            slidesPerView: 1,
            centeredSlides: true
        },
        640: {
            slidesPerView: 2,
        },
        870:{
            slidesPerView: 3
        },
        1000:{
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }
});

new Swiper('.sets-swiper',{
    centeredSlides: true,
    navigation: {
        nextEl:'.sets-button-next',
        prevEl:'.sets-button-prev'
    },
    pagination: {
        el: '.sets-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    },
    breakpoints: {
        280:{
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0
        },
        870:{
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 10
        },
        1000:{
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 30
        }
    }
});

new Swiper('.all__items-swiper',{
     grid: {
          rows: 2
        },
    slidesPerGroup: 2,
    loop: false,
    navigation: {
        nextEl:'.sets-button-next',
        prevEl:'.sets-button-prev'
    },
    pagination: {
        el: '.sets-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    },
    breakpoints: {
        280:{
            slidesPerView: 1,
            spaceBetween: 0
        },
        870:{
            slidesPerView: 2,
            spaceBetween: 10
        },
        1000:{
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

var modalSwiperSmall = new Swiper(".modal__swiper-small", {
    spaceBetween: 10,
    slidesPerView: 3,
    observer: true,
    observeParents: true,
    width: 300,
    height: 100
});
var modalSwiperBig = new Swiper(".modal__swiper-big", {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    thumbs: {
        swiper: modalSwiperSmall,
    }
});
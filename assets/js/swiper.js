var flkty = new Flickity(document.querySelector('.main-gallery'), {
    prevNextButtons: false,
    autoPlay: 1500,
    fade: true,

});

var swiper = new Swiper(".best-seller", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".recomended-swiper", {
    loop: true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
        },
        "@0.75": {
          slidesPerView: 2,
        },
        "@1.00": {
          slidesPerView: 3,
        },
        "@1.50": {
          slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});

var swiper = new Swiper(".popular-swiper", {
    loop: true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
        },
        "@0.75": {
          slidesPerView: 2,
        },
        "@1.00": {
          slidesPerView: 3,
        },
        "@1.50": {
          slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});
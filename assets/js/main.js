// Home swiper
var swiper = new Swiper(".homeSwiper", {
    loop: true,
    autoplay: {
        delay: 3500,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
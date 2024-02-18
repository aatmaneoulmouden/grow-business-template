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

// Menu links
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(activeLink => {
    activeLink.addEventListener('click', () => {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    });
});
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

// Active menus when scrolling
window.addEventListener('scroll', () => {
    const homeOffsetTop = document.querySelector('#home').offsetTop;
    const aboutOffsetTop = document.querySelector('#about').offsetTop;
    const servicesOffsetTop = document.querySelector('#services').offsetTop;
    const blogOffsetTop = document.querySelector('#blog').offsetTop;
    const contactOffsetTop = document.querySelector('#contact').offsetTop;
    var scrollY = window.scrollY;

    if (scrollY >= homeOffsetTop && scrollY < aboutOffsetTop) {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('#home-link').classList.add('active');
    } else if (window.scrollY >= aboutOffsetTop && scrollY < servicesOffsetTop) {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('#about-link').classList.add('active');
    } else if (window.scrollY >= servicesOffsetTop && scrollY < blogOffsetTop) {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('#services-link').classList.add('active');
    } else if (window.scrollY >= blogOffsetTop && scrollY < contactOffsetTop) {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('#blog-link').classList.add('active');
    } else if (window.scrollY >= contactOffsetTop) {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('#contact-link').classList.add('active');
    }
});
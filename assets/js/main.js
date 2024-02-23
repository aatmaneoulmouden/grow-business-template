// Open/Close menu
const menuToggler = document.querySelector('#menu-toggler');
const menuTogglerIcon = document.querySelector('#menu-toggler i');
const menuItems = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu-list');

function toggleActiveClass() {
    menu.classList.toggle('active');
    menuTogglerIcon.classList.toggle('fa-xmark');
}

menuToggler.addEventListener('click', toggleActiveClass);
menuItems.forEach(item => {
    item.addEventListener('click', toggleActiveClass);
});

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

// Open/Close popup
const popup = document.querySelector('.popup');

document.querySelectorAll('.open-popup-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.add('active');
    });
});

document.querySelector('.popup-close-btn').addEventListener('click', () => {
    popup.classList.remove('active');
});
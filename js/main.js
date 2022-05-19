new WOW().init();

const headerMenuBtn = document.querySelector('.header__menu-btn');
const headerMenu = document.querySelector('.header__menu');
headerMenuBtn.addEventListener('click', function () {
    headerMenuBtn.classList.toggle('active');
    headerMenu.classList.toggle('active');
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 620) {
            headerMenu.classList.remove('active');
            headerMenuBtn.classList.remove('active');
        }
    });
});

const navLinks = document.querySelectorAll('.link');
navLinks.forEach(e => {
    e.addEventListener('click', function () {
        headerMenu.classList.remove('active');
        headerMenuBtn.classList.remove('active');
    })
});

const sections = document.querySelectorAll('section[id]');
const fullscreenImgSrc = document.querySelector(`section[id=fullscreen] .fullscreen-img img`).getAttribute('src');
const fullscreenWebpSrc = document.querySelector(`section[id=fullscreen] .fullscreen-img source`).getAttribute('srcset');
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(e => {
        const sectionHeight = e.offsetHeight;
        const sectionTop = e.offsetTop - 200;
        let sectionId = e.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.header__menu a[href*='${sectionId}']`).classList.add('active-link');
        } else {
            document.querySelector(`.header__menu a[href*='${sectionId}']`).classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

const pathContentItem = document.querySelectorAll('.path__content-item');

pathContentItem.forEach(el => {
    if (el.children[1].textContent.length > 275) {
        el.classList.add('max-lenth');
    }
    el.children[2].addEventListener('click', function () {
        el.children[1].classList.toggle('active');
        el.children[2].classList.toggle('text');
    });
});
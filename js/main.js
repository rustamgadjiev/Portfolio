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

const skillsPercent = document.querySelectorAll('.skills__percent');
skillsPercent.forEach((item) => {
    let itemValue = parseInt(item.innerHTML);
    if (itemValue <= 40) {
        item.style.backgroundColor = 'rgba(255, 81, 0, 0.6)';
        item.style.borderColor = 'rgb(255, 81, 0)';
    } else if (itemValue <= 66) {
        item.style.backgroundColor = 'rgba(255, 153, 0, 0.6)';
        item.style.borderColor = 'rgb(255, 153, 0)';
    } else if (itemValue == 100) {
        item.style.color = 'gold';
        item.style.backgroundColor = 'rgba(0, 0, 255, 0.6)';
        item.style.borderColor = 'rgb(0, 0, 255)';
    } else {
        item.style.backgroundColor = 'rgba(123, 255, 0, 0.6)';
        item.style.borderColor = 'rgb(123, 255, 0)';
    }
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
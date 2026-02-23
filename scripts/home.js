AOS.init();

let splideStar = new Splide('.splide', {
    type   : 'loop',
    perPage: 6,
    perMove: 1,
    autoplay: true
});

let splideReview = new Splide('.slider-review', {
    type   : 'loop',
    review : true
});

splideStar.mount();
splideReview.mount();

const burger = document.getElementById("burger");
const menu   = document.querySelector(".header-container");

// Показываем/скрываем меню при клике
burger.addEventListener("click", () => {
    console.log('open')
    menu.classList.toggle("menu-open");
});

// Автоматически скрываем меню, если ширина > 1024
function checkScreenWidth() {
    if (window.innerWidth > 768) {
        menu.classList.remove("menu-open");
    }
}

// Проверить при загрузке
checkScreenWidth();

// Проверять при изменении размера окна
window.addEventListener("resize", checkScreenWidth);
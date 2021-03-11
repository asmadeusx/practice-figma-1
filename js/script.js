'use strict';

//#region SCREEN - 1 - TITLE

//#endregion

//#region SCREEN - 2 - SLIDER - DONE

const s2sliderbtns = document.querySelectorAll('.sliderbtns__btn');
const s2sliders = document.querySelectorAll('.list__slide');
const s2playpausebtn = document.getElementById('playpause');
const s2btnnext = document.querySelector('.next');
const s2btnprev = document.querySelector('.prev');
const s2intervalMs = 7000;
let s2SlideInterval = setInterval(nextSlide, s2intervalMs);
let s2currentSlide = 0;

function nextSlide() {
    slider(s2currentSlide + 1);
}

function prevSlide() {
    slider(s2currentSlide - 1);
}

function slider(n) {
    hide(s2sliders[s2currentSlide]);
    s2currentSlide = (n + s2sliders.length) % s2sliders.length;
    show(s2sliders[s2currentSlide]);
}

s2btnnext.addEventListener('click', nextSlide);
s2btnprev.addEventListener('click', prevSlide);

s2playpausebtn.addEventListener('click', () => {
    console.log(s2playpausebtn);
    if (s2playpausebtn.classList.contains('pause')) {
        s2playpausebtn.innerHTML = '<i class="fas fa-play"></i>';
        s2playpausebtn.classList.remove('pause');
        s2playpausebtn.classList.add('play');
        clearInterval(s2SlideInterval);
    } else {
        s2playpausebtn.innerHTML = '<i class="fas fa-pause"></i>';
        s2playpausebtn.classList.remove('play');
        s2playpausebtn.classList.add('pause');
        s2SlideInterval = setInterval(nextSlide, s2intervalMs);
    }
});

function hide(item) {
    item.classList.remove('show');
}

function show(item) {
    item.classList.add('show');
}

//#endregion

//#region SCREEN - 3 - CATALOG - DONE
const s3brandList = [
    'Robe',
    'SGM',
    'StudioDue',
    'ChainMaster',
    'Milos',
    'Universal Effects',
    'ArtLighting',
    'MobilTech',
    'Lampo',
    'Martin'
];

const s3productItemDesc = [
    'Статичные светодиодные приборы',
    'Контроллеры',
    'Аксессуары'
];

// Добавление кнопок с Брендами и создание обработчиков событий на них
function s3AddBtnsToBrandList() {
    const s3BrandList = document.querySelector('.brand__list');
    for (let i = 0; i < s3brandList.length; i++) {
        const btn = document.createElement('button');
        s3BrandList.append(btn);
        btn.innerHTML = `${s3brandList[i]}`;
        btn.classList.add('list__item');
    }

    const s3brandBtns = document.querySelectorAll('.list__item');
    s3brandBtns.forEach(item => {
        item.addEventListener('click', () => {
            const s3productItems = document.querySelectorAll('.products__item');
            s3productItems.forEach(item => {
                item.remove();
            });
            // if (inHTML == s3brandList[i]) {

            // };
            // s3createProductItembyBrand(item.innerHTML);
        });
    });

}
// Создание Продуктов по выбранному Бренду после клика.
function s3createProductItembyBrand(inHTML) {
    for (let i1 = 0; i1 < s3brandList.length; i1++) {
        // s3CreateThreeProductItems(i1);
        const s3ProductsItems = document.querySelectorAll('.products__item');
        console.log(s3ProductsItems);
        // s3ProductsItems.classList.add(`${s3brandList[i1].toLowerCase()}`);
    }
}

function s3CreateThreeProductItems(x) {
    const s3brandProducts = document.querySelector('.catalog__products');
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        s3brandProducts.append(div);
        div.classList.add('products__item');
        div.innerHTML =
        `
        <img src="./img/s3-${s3brandList[x].toLowerCase()}-${i+1}.png" alt="${s3brandList[x].toLowerCase()}-${i+1}" class="item__photo">
        <div class="item__description">
            <p>${s3productItemDesc[i]}</p>
        </div>
        `;
    }
}


s3createProductItembyBrand();
s3AddBtnsToBrandList();

//#endregion

//#region SCREEN - 4 - RENT



//#endregion

//#region SCREEN - 5 - NEWS

//#endregion

//#region SCREEN - 6 - FOOTER

//#endregion
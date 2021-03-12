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

function s3AddBtnsToBrandList() {
    const s3BrandList = document.querySelector('.brand__list');
    for (let i = 0; i < 10; i++) {
        const btn = document.createElement('button');
        s3BrandList.append(btn);
        btn.innerHTML = `${s3brandList[i]}`;
        btn.classList.add('list__item');
    }
}

function s3createProductItem(x) {
    const s3brandProducts = document.querySelector('.catalog__products');
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        s3brandProducts.append(div);
        div.classList.add('products__item');
        div.innerHTML =
            `
        <img src="./img/${s3brandList[x]}-item-${i+1}.png" alt="${s3brandList[x]}-item-${i+1}" class="item__photo">
        <div class="item__description">
            <a href="#" class="description__link"><p>${s3productItemDesc[i]}</p></a>
        </div>
        `;
    }
}

function s3AddCatalogProductsbyBrand() {
    const s3brandBtns = document.querySelectorAll('.list__item');
    s3brandBtns.forEach(item => {
        item.addEventListener('click', () => {
            const s3productItems = document.querySelectorAll('.products__item');
            s3productItems.forEach(item => {
                item.remove();
            });
            s3createProductItembyBrand(item.innerHTML);
        });
    });
}

function s3createProductItembyBrand(inHTML) {
    for (let i = 0; i < 11; i++) {
        if (inHTML == s3brandList[i]) {
            s3createProductItem(i);
        }
    }
}

s3AddBtnsToBrandList();
s3AddCatalogProductsbyBrand();

//#endregion

//#region SCREEN - 4 - RENT



//#endregion

//#region SCREEN - 5 - NEWS

//#endregion

//#region SCREEN - 6 - FOOTER

//#endregion
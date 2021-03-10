'use strict';
//#region SCREEN - 3 - CATALOG
const brandList = [
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

const productItemDesc = [
    'Статичные светодиодные приборы',
    'Контроллеры',
    'Аксессуары'
];

function s3AddBtnsToBrandList() {
    const eBrandList = document.querySelector('.brand__list');
    for (let i = 0; i < 10; i++) {
        const btn = document.createElement('button');
        eBrandList.append(btn);
        btn.innerHTML = `${brandList[i]}`;
        btn.classList.add('list__item');
    }
}

function createProductItem(x) {
    const brandProducts = document.querySelector('.catalog__products');
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        brandProducts.append(div);
        div.classList.add('products__item');
        div.innerHTML =
            `
        <img src="./img/${brandList[x]}-item-${i+1}.png" alt="${brandList[x]}-item-${i+1}" class="item__photo">
        <div class="item__description">
            <p>${productItemDesc[i]}</p>
        </div>
        `;
    }
}

function s3AddCatalogProductsbyBrand() {
    const brandBtns = document.querySelectorAll('.list__item');
    brandBtns.forEach(item => {
        item.addEventListener('click', () => {
            const productItems = document.querySelectorAll('.products__item');
            productItems.forEach(item => {
                item.remove();
            });
            createProductItembyBrand(item.innerHTML);
        });
    });
}

function createProductItembyBrand(inHTML) {
    for (let i = 0; i < 11; i++) {
        if (inHTML == brandList[i]) {
            createProductItem(i);
        }
    }
}

s3AddBtnsToBrandList();
s3AddCatalogProductsbyBrand();

//#endregion
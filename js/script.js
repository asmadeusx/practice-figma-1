'use strict';
//#region SCREEN - 1 - TITLE

//#endregion

//#region SCREEN - 2 - SLIDER

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
            <p>${s3productItemDesc[i]}</p>
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
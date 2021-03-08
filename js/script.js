'use strict';

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
    'Martin', 
    'Spotlight', 
    'Compulite', 
    'Eurolite'
];

const fs = document.querySelector('.first-screen');
const fsBg = document.querySelector('.first-screen__bg');

console.log(fs.clientWidth);
fsBg.style.width = fs.offsetWidth;
// fsBg.style.width = document.body.clientWidth;
// fsBg.style.height = document.body.offsetHeight;
var h = window.innerHeight;
var header = document.getElementById('header');
var header_h = 0;
var headerHero = document.querySelector('.header__hero');
var headerHero_h = 0;
var headerHeroImg = document.getElementById('header-hero');
var headerGreen = document.querySelector('.header__green');
var headerGreen_h = headerGreen.offsetHeight;
var imageOrganicer = document.getElementById('img__organicer');
var imageOrganicer_h = imageOrganicer.offsetHeight;
var mainHero = document.querySelector('.main__hero');
var mainHero_h = 356.5;
var mainHeroImg = document.getElementById('main-hero');
var bestNewsText = document.querySelector('section:nth-child(12) h3');
var elevateText = document.querySelector('section:nth-child(5) h3');
var w = window.innerWidth;

if (h < 400) {
    header_h = h + headerGreen_h;
    headerHero_h = h;
} else {
    header_h = h;
    headerHero_h = h - headerGreen_h;
}

if (w > 584) {
    headerHeroImg.src = './assets/images/header-hero.jpg';
    bestNewsText.innerHTML = "And the best news is,<br /> WE'RE GIVING IT TO YOU"
    elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
}

// console.log(mainHero_h);

if (imageOrganicer_h > 310) {
    if (w < 585) {
        mainHero_h = imageOrganicer_h * 1.15;
        // console.log(mainHero_h);
    } else {
        mainHero_h = imageOrganicer_h * 1.05;
        // console.log(mainHero_h);
    }
}

header.style.minHeight = header_h + 'px';
headerHero.style.height = headerHero_h + 'px';
mainHero.style.height = mainHero_h + 'px';

console.log('screen height = ' + h, 'screen width = ' + w);

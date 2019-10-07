var h = window.innerHeight;
var header = document.getElementById('header');
var header_h = 0;
var headerHero = document.querySelector('.header__hero');
var headerHero_h = 0;
var headerHeroImg = document.getElementById('header-hero');
var headerGreen = document.querySelector('.header__green');
var headerGreen_h = headerGreen.offsetHeight;
var imageContainerInner = document.querySelector('.image-container__inner');
var imageContainerInner_h = imageContainerInner.offsetHeight;
var mainHero = document.querySelector('.main__hero');
var mainHero_h = imageContainerInner_h * 1.5;
var mainHeroImg = document.getElementById('main-hero');
var bestNewsText = document.querySelector('section:nth-child(12) h3');
var elevateText = document.querySelector('section:nth-child(5) h3');
var screen = document.getElementById('screen');
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
    mainHero_h = imageContainerInner_h * 1.25;
    bestNewsText.innerHTML = "And the best news is,<br /> WE'RE GIVING IT TO YOU"
    elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
}

header.style.minHeight = header_h + 'px';
headerHero.style.height = headerHero_h + 'px';
mainHero.style.height = mainHero_h + 'px';

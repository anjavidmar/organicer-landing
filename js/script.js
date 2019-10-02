var h = window.innerHeight;
var header = document.getElementById('header');
var headerHero = document.querySelector('.header__hero');
var headerGreen = document.querySelector('.header__green');
var headerGreen_h = headerGreen.offsetHeight;
var headerHero_h = h - headerGreen_h
var mainHero = document.querySelector('.main__hero');
var mainHero_h = h * 0.75;
var w = window.innerWidth;

console.log('hello world!', w, h, header, headerHero, headerHero_h, headerGreen, headerGreen_h);

header.style.minHeight = h + 'px';
headerHero.style.height = headerHero_h + 'px';
mainHero.style.height = mainHero_h + 'px';

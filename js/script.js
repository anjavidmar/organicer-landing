var h = window.innerHeight;
var header = document.getElementById('header');
var headerHero = document.querySelector('.header__hero');
var headerGreen = document.querySelector('.header__green');
var headerGreen_h = headerGreen.offsetHeight;
var headerHero_h = h - headerGreen_h
var mainHero = document.querySelector('.main__hero');
var mainHero_h = imageContainerInner_h;
var imageContainerInner = document.querySelector('.image-container--inner');
var imageContainerInner_h = imageContainerInner.offsetHeight;
var mainHero = document.querySelector('.main__hero');
var mainHero_h = imageContainerInner_h * 1.5;
var screen = document.getElementById('screen');
var w = window.innerWidth;

console.log('hello world!', w, h, header, headerHero, headerHero_h, headerGreen, headerGreen_h);
console.log(imageContainerInner, imageContainerInner_h, mainHero_h);

header.style.minHeight = h + 'px';
headerHero.style.height = headerHero_h + 'px';
mainHero.style.height = mainHero_h + 'px';
screen.innerHTML = 'screen width: ' + w + ', screen height: ' + h;

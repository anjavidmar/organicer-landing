var h = window.innerHeight;
var header = document.getElementById('header');
var header_h = 0;
var headerHero = document.querySelector('.header__hero');
var headerHero_h = 0;
var headerGreen = document.querySelector('.header__green');
var headerGreen_h = headerGreen.offsetHeight;
var imageContainerInner = document.querySelector('.image-container--inner');
var imageContainerInner_h = imageContainerInner.offsetHeight;
var mainHero = document.querySelector('.main__hero');
var mainHero_h = imageContainerInner_h * 1.5;
var screen = document.getElementById('screen');
var w = window.innerWidth;

console.log('hello world!', w, h, header, headerHero, headerHero_h, headerGreen, headerGreen_h);
console.log(imageContainerInner, imageContainerInner_h, mainHero_h);

if (h < 400) {
    header_h = h + headerGreen_h;
    headerHero_h = h;
} else {
    header_h = h;
    headerHero_h = h - headerGreen_h;
}

console.log('1 : ', h);
console.log('2 : ', header_h);
console.log('3 : ', headerHero_h);

header.style.minHeight = header_h + 'px';
headerHero.style.height = headerHero_h + 'px';
mainHero.style.height = mainHero_h + 'px';
screen.innerHTML = 'screen width: ' + w + ', screen height: ' + h;

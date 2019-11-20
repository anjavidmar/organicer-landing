var h = window.innerHeight;
var header = document.getElementById('header');
var header_h = header.offsetHeight;
var main = document.getElementById('main');
var hero = document.getElementById('hero');
var section = document.getElementById('section');
var footer = document.getElementById('footer');
var footer_h = footer.offsetHeight;
var main_h = h - header_h - footer_h;
// 
// var headerHero = document.querySelector('.header__hero');
// var headerHero_h = 0;
// var headerHeroImg = document.getElementById('header-hero');
// var headerGreen = document.querySelector('.header__green');
// var headerGreen_h = headerGreen.offsetHeight;
// var imageOrganicer = document.getElementById('img__organicer');
// var imageOrganicer_h = imageOrganicer.offsetHeight;
// var mainHero = document.querySelector('.main__hero');
// var mainHero_h = 356.5;
// var mainHeroImg = document.getElementById('main-hero');
// var bestNewsText = document.querySelector('section:nth-child(12) h3');
// var elevateText = document.querySelector('section:nth-child(5) h3');
var w = window.innerWidth;
var w_check = w * 0.9875;

console.log('screen height = ' + h, 'screen width = ' + w);
console.log(header);
console.log(header_h);
console.log(main);
console.log(main_h);
console.log(hero);
console.log(section);
console.log(footer);
console.log(footer_h);

if (w * 0.9875 > h) {
    hero.src = './assets/images/header-hero.jpg';
}

if (w * 0.6666 > h) {
    hero.className = 'hero--desktop';
}

main.style.minHeight = h + 'px';
section.style.top = header_h + 'px';


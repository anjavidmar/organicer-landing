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
var featureImg = document.getElementsByClassName('variable');
var featureLi = document.getElementsByClassName('hoverable');
var mainHero = document.querySelector('.main__hero');
var mainHero_h = 356.5;
var mainHeroImg = document.getElementById('main-hero');
var elevateText = document.querySelector('h3.elevate');
var w = window.innerWidth;

console.log(featureImg, featureLi);

function showOnHover(a) {
    for (let i = 0; i < featureImg.length; i++) {
        featureImg[i].classList.remove('visible')
    }
    featureImg[a].classList.add('visible');
}

featureLi[0].addEventListener('mouseenter', e => {
    showOnHover(0)
});
featureLi[1].addEventListener('mouseenter', e => {
    showOnHover(1)
});
featureLi[2].addEventListener('mouseenter', e => {
    showOnHover(2)
});
featureLi[3].addEventListener('mouseenter', e => {
    showOnHover(3)
});
featureLi[4].addEventListener('mouseenter', e => {
    showOnHover(4)
});
featureLi[5].addEventListener('mouseenter', e => {
    showOnHover(5)
});

if (h < 400) {
    header_h = h + headerGreen_h;
    headerHero_h = h;
} else {
    header_h = h;
    headerHero_h = h - headerGreen_h;
}

if (w > 584) {
    headerHeroImg.src = './assets/images/header-hero.jpg';
    elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
}

if (imageOrganicer_h > 310) {
    if (w < 585) {
        mainHero_h = imageOrganicer_h * 1.15;
    } else {
        mainHero_h = imageOrganicer_h * 1.05;
    }
}

header.style.minHeight = header_h + 'px';
headerHero.style.height = headerHero_h + 'px';
mainHero.style.height = mainHero_h + 'px';

console.log('screen height = ' + h, 'screen width = ' + w);

$(document).ready(function(){
    var interval; /* = setInterval(function() {
        h = window.innerHeight;
        headerGreen_h = headerGreen.offsetHeight;
        imageOrganicer_h = imageOrganicer.offsetHeight;
        w = window.innerWidth;

        if (h < 400) {
            header_h = h + headerGreen_h;
            headerHero_h = h;
        } else {
            header_h = h;
            headerHero_h = h - headerGreen_h;
        }

        if (imageOrganicer_h > 310) {
            mainHero_h = imageOrganicer_h * 1.15;
            if (w > 584) {
                mainHero_h = imageOrganicer_h * 1.05;
            }
        }

        header.style.height = header_h + 'px';
        headerHero.style.height = headerHero_h + 'px';
        mainHero.style.height = mainHero_h + 'px';
        sizingCount++

        if (sizingCount > 4) {
            clearInterval(interval);
        }
    }, 1500); */

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        }
    });

    $(window).resize(function(){
        h = window.innerHeight;
        headerGreen_h = headerGreen.offsetHeight;
        imageOrganicer_h = imageOrganicer.offsetHeight;
        w = window.innerWidth;
        
        if (h < 400) {
            header_h = h + headerGreen_h;
            headerHero_h = h;
        } else {
            header_h = h;
            headerHero_h = h - headerGreen_h;
        }

        if (w > 584) {
            headerHeroImg.src = './assets/images/header-hero.jpg';
            mainHero_h = imageOrganicer_h * 1.05;
            elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
        } else {
            headerHeroImg.src = './assets/images/header-hero-mobile.jpg';
            mainHero_h = imageOrganicer_h * 1.15;
            elevateText.innerHTML = 'Elevate your task management to a whole new level with our 2020 Organicer.';
        }

        header.style.minHeight = header_h + 'px';
        headerHero.style.height = headerHero_h + 'px';
        mainHero.style.height = mainHero_h + 'px';
    });
});

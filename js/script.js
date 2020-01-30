var h = window.innerHeight;
var header = document.getElementById('header');
var header_h = header.offsetHeight;;
var headerHero = document.querySelector('.header__hero');
var headerHero_h = 0;
var headerHeroImg = document.getElementById('header-hero');
var headerGreen = document.querySelector('.header__green');
var headerGreen_h = headerGreen.offsetHeight;

var li = document.getElementsByTagName('li');
var ulBenefits = document.querySelector('ul.benefits');
var ulFeatures = document.querySelector('ul.features');

console.log(li, ulBenefits, ulFeatures);

var featureImg = document.getElementsByClassName('variable');
var featureLi = document.getElementsByClassName('hoverable');
var featureSpan = document.querySelectorAll('.hoverable > span');

console.log(featureImg, featureLi);
console.log(featureSpan);


function showOnHover(a) {
    for (let i = 0; i < featureImg.length; i++) {
        featureImg[i].classList.remove('visible');
        featureLi[i].classList.remove('focused');
    }
    featureImg[a].classList.add('visible');
    featureLi[a].classList.add('focused');
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

// var imageOrganicer = document.getElementById('img__organicer');
// var imageOrganicer_h = imageOrganicer.offsetHeight;
// var mainHero = document.querySelector('.main__hero');
// var mainHero_h = imageOrganicer_h * 1.15;
// var mainHeroImg = document.getElementById('main-hero');
// var bestNewsText = document.querySelector('section:nth-child(12) h3');
// var elevateText = document.querySelector('section:nth-child(5) h3');
// var sizingCount = 1;
var videoContainer = document.getElementById('video-container');
var videoContainer_w = videoContainer.offsetWidth;
var video = document.getElementById('video');
var video_w = videoContainer_w;
var video_h = videoContainer_w * 0.5625;
var w = window.innerWidth;

// console.log('header', header);
// console.log('header_h',header_h);
// console.log('headerHero', headerHero);
// console.log('headerHero_h', headerHero_h);
// console.log('headerHeroImg', headerHeroImg);
// console.log('headerGreen', headerGreen);
// console.log('headerGreen_h', headerGreen_h);
// console.log('videoContainer', videoContainer, videoContainer_w);
// console.log('video', video);
// console.log(video_w + 'px x ' + video_h + 'px');


if (h < 400) {
    header_h = h + headerGreen_h;
    headerHero_h = h;
} else {
    header_h = h;
    headerHero_h = h - headerGreen_h;
}

// if (w > 584) {
//     mainHero_h = imageOrganicer_h * 1.05;
// }

if (w > 619) {
    headerHeroImg.src = './assets/images/header-hero.jpg';
    // bestNewsText.innerHTML = "And the best news is,<br /> WE'RE GIVING IT TO YOU"
    // elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
}

if (videoContainer_w > 1000) {
    video_w = 1000;
    video_h = 562;
}

/*if (w > 584) {
    headerHeroImg.src = 'http://myorganicer2020.com/assets/images/header-hero.jpg';
    mainHero_h = imageOrganicer_h * 1.05;
    elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
}*/

console.log('screen height = ' + h, 'screen width = ' + w);

// header.style.minHeight = header_h + 'px';
headerHero.style.height = headerHero_h + 'px';
video.width = video_w;
video.height = video_h;
//mainHero.style.height = mainHero_h + 'px';


$(document).ready(function(){
    // var x = setInterval(function() {
    //     h = window.innerHeight;
    //     headerGreen_h = headerGreen.offsetHeight;
    //     imageOrganicer_h = imageOrganicer.offsetHeight;
    //     w = window.innerWidth;

    //     if (h < 400) {
    //         header_h = h + headerGreen_h;
    //         headerHero_h = h;
    //     } else {
    //         header_h = h;
    //         headerHero_h = h - headerGreen_h;
    //     }

    //     if (imageOrganicer_h > 310) {
    //         mainHero_h = imageOrganicer_h * 1.15;
    //         if (w > 584) {
    //             mainHero_h = imageOrganicer_h * 1.05;
    //         }
    //     }

    //     header.style.height = header_h + 'px';
    //     headerHero.style.height = headerHero_h + 'px';
    //     mainHero.style.height = mainHero_h + 'px';
    //     sizingCount++

    //     if (sizingCount > 5) {
    //         clearInterval(x);
    //     }
    // }, 1500);

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
        // imageOrganicer_h = imageOrganicer.offsetHeight;
        videoContainer_w = videoContainer.offsetWidth;
        w = window.innerWidth;

        if (h < 400) {
            header_h = h + headerGreen_h;
            headerHero_h = h;
        } else {
            header_h = h;
            headerHero_h = h - headerGreen_h;
        }

        if (w < 620) {
        //     elevateText.innerHTML = 'Elevate your task management to a whole new level with our 2020 Organicer.';
            headerHeroImg.src = './assets/images/header-hero-mobile.jpg';
        //     mainHero_h = imageOrganicer_h * 1.15;
        } else {
        //     elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
            headerHeroImg.src = './assets/images/header-hero.jpg';
        //     mainHero_h = imageOrganicer_h * 1.05;
        }

        if (videoContainer_w > 1000) {
            video_w = 1000;
            video_h = 562;
        } else {
            video_w = videoContainer_w;
            video_h = videoContainer_w * 0.5625;
        }

        // header.style.minHeight = header_h + 'px';
        headerHero.style.height = headerHero_h + 'px';
        // mainHero.style.height = mainHero_h + 'px';

        video.width = video_w;
        video.height = video_h;
    });
});
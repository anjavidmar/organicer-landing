var h = window.innerHeight;
var header = document.getElementById('header');
var header_h = 0;
var headerHero = document.querySelector('.header__hero');
var headerHero_h = 0;
var headerHeroImg = document.getElementById('header-hero');
var headerGreen = document.querySelector('.header__green');
var headerGreen_h = headerGreen.offsetHeight;
var i = 0;
var imageOrganicer = document.getElementById('img__organicer');
var imageOrganicer_h = imageOrganicer.offsetHeight;
var mainHero = document.querySelector('.main__hero');
var mainHero_h = imageOrganicer_h * 1.15;
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
    headerHeroImg.src = 'http://myorganicer2020.com/assets/images/header-hero.jpg';
    bestNewsText.innerHTML = "And the best news is,<br /> WE'RE GIVING IT TO YOU"
    elevateText.innerHTML = 'Elevate your task management to a whole<br /> new level with our 2020 Organicer.';
}

header.style.height = header_h + 'px';
headerHero.style.height = headerHero_h + 'px';
mainHero.style.height = mainHero_h + 'px';

console.log('screen height = ' + h, 'screen width = ' + w);

var x = setInterval(function() {
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
}, 1500);

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
});

/**
 * Created by anton on 09.03.2018.
 */
"use strict";

$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<img src="img/g202.png">',
            '<img src="img/g206.png">'],
        autoplay: true,
        autoplayTimeout: 2000

    });

    $('.review-owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<img src="img/g202.png">',
            '<img src="img/g206.png">'],
        autoplay: true,
        autoplayTimeout: 1000
    });

    $('.countries-link').hover(function () {
        $('.countries-list').fadeIn(300);
    }, function () {
        setTimeout(function () {
            $('.countries-list').show();
        }, 150)
    });

    $('.countries-list').hover(function () {}, function () {
        $('.countries-list').fadeOut(300);
    });

    $('.close').click(function () {
        $('.countries-list').fadeOut(300);
    });

});


document.querySelector('.page-container').addEventListener('click', fTabs);

function fTabs(event) {

    if (event.target.className == 'tab') {

        var dataTab = event.target.getAttribute('data-tab');

        var tabH = document.getElementsByClassName('tab');
        for (var j = 0; j < tabH.length; j++) {
            tabH[j].classList.remove('tab-active');
        }

        event.target.classList.add('tab-active');

        var tabContent = document.getElementsByClassName('wrapper');

        for (var i = 0; i < tabContent.length; i++) {
            if (dataTab == i) {
                tabContent[i].style.display = 'inline';
            } else {
                tabContent[i].style.display = 'none';
            }
        }
    }
}

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
            '<img src="img/g206.png">'
        ],
        autoplay: true,
        autoplayTimeout: 2000

    });

    $('.review-owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<img src="img/g202.png">',
            '<img src="img/g206.png">'
        ],
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

var pageContainer = document.querySelector('.page-container');
pageContainer.addEventListener('click', function (e) {

    var target = e.target;
    var targetClassList = 'tab';
    var dataTab;

    while (target.classList != 'page-container') {
        if (target.classList[0] == 'tab') {

            dataTab = target.getAttribute('data-tab');

            tabContent(target);
            return;
        }
        target = target.parentNode;
    }

    function tabContent(target) {

        var tab = document.querySelectorAll('.tab');
        var wrapper =document.querySelectorAll('.wrapper');

        for (var i = 0; i < wrapper.length; i++) {
            wrapper[i].style.display = 'none';
        }
        wrapper[dataTab].style.display = 'inline';
        
        for (var j = 0; j < tab.length; j++) {
            tab[j].classList.remove('tab-active');
        }
        tab[dataTab].classList.add('tab-active');

    }
});

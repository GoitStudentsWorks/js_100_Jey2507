import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var prevButton = document.querySelector('.swiper-button-prev');
var nextButton = document.querySelector('.swiper-button-next');

prevButton.disabled = true;

prevButton.addEventListener('click', function () {
  swiper.slidePrev();
});

nextButton.addEventListener('click', function () {
  swiper.slideNext();
});

swiper.on('slideChange', function () {
  nextButton.disabled = swiper.isEnd ? true : false;
  prevButton.disabled = swiper.isBeginning ? true : false;
});

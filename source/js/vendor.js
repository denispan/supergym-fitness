// Swiper 7.4.1
import Swiper from './vendor/swiper.js';

const sliderTrainers = new Swiper('.trainers__slider', {
  slidesPerView: 1,
  loop: true,
  direction: 'horizontal',
  loopFillGroupWithBlank: false,
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.trainers__swiper-button-next',
    prevEl: '.trainers__swiper-button-prev',
  },

});

const sliderReviews = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__slider-btn--next',
    prevEl: '.reviews__slider-btn--prev',
  },
});

export {sliderTrainers, sliderReviews};

window.addEventListener("load", function() {

  swiper.init()
});

const swiper = new Swiper('.polices__items', {
  slidesPerView: 4,
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.polices__button-next',
    prevEl: '.police__button-prev',
  },
});

const swiper2 = new Swiper('.polices__items', {
  slidesPerView: 4,
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.polices__button-next',
    prevEl: '.police__button-prev',
  },
});



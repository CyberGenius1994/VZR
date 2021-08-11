const swiper = new Swiper('.polices__items', {
  slidesPerView: 4,
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.polices__button-next',
    prevEl: '.polices__button-prev',
  },
});

const swiper2 = new Swiper('.news-slider', {
  slidesPerView: 'auto',
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  autoHeight: false,
  navigation: {
    nextEl: '.abroad__button-next',
    prevEl: '.abroad__button-prev',
  },
});

window.addEventListener("load", function() {
  swiper.init();
  swiper2.init();
});





const swiper = new Swiper('.polices__items', {
  slidesPerView: 'auto',
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.polices__button-next',
    prevEl: '.polices__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    480: {
      slidesPerView: '3',
    },
    1023: {
      slidesPerView: 4,
    }
  }
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

let slides = [
  'Топовый ассистанс',
  'Моментальное согласование',
  'Неограниченные консультации',
  'Все полисы с COVID – 19'
];
const swiper3 = new Swiper('.swiper-container', {
  slidesPerView: 1,
  effect: 'fade',
  speed: 500,
  loop: true,
  autoHeight: false,
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (slides[index]) + '</span>';
    },
  },
});

window.addEventListener("load", function() {
  swiper.init();
  swiper2.init();
  swiper3.init();
});





window.addEventListener("load", function() {

  swiper.init()
});

const swiper = new Swiper('.polices__items', {
  slidesPerView: 4,
  spaceBetween: 22,
  direction: 'horizontal',
  loop: true,
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});



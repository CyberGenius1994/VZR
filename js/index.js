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

const modalsBlock = function () {
  const modals = document.querySelectorAll('[data-modal]');

  modals.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add('open');
      const exits = modal.querySelectorAll('.modal-exit');
      exits.forEach(function(exit) {
        exit.addEventListener('click', function(event) {
          event.preventDefault();
          modal.classList.remove('open');
        });
        document.onkeydown = function(e) {
          if (e.key === 'Escape') {
            modal.classList.remove('open');
          }
        };
      });
    });
  });
}

window.addEventListener("load", function() {
  modalsBlock();
});





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 36,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('#nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
});


var Swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 18,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
},
});
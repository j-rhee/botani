// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 36,
  autoplay: true,
  loop: true,
});

// fade-in
$(document).ready(function () {
  $(window).scroll(function () {
    $('.fade').each(function (i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 900);
      }
    });
  });
});

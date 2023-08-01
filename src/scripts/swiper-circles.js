(function () {
  setTimeout(initializeSwiper, 1000);
  // initializeSwiper()
})();

function initializeSwiper() {
  const swiper = new Swiper('.circles-swiper', {
    speed: 400,
    direction: 'horizontal',
    // slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}

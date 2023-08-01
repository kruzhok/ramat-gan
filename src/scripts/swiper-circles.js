(function () {
  initializeSwiper();
})();

function initializeSwiper() {
  const swiper = new Swiper('.circles-swiper', {
    speed: 400,
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 0,
    loop: true,
    speed: 5000,
    autoplay: {
      enabled: true,
      delay: 0,
      disableOnInteraction: false,
    },
  });
}

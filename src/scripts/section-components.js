(function () {
  // section about
  const swiper = new Swiper('.gallery-section', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
  });
})();

(function () {
  // video play
  const playButton = document.querySelector('.section__video-play');
  const poster = document.querySelector('.section__video-cover');
  const video = document.querySelector('.section__video');
  const hiddenClass = 'section__video-wrapper__hide';

  const playVideo = (evt) => {
    evt.preventDefault();
    playButton.classList.add(hiddenClass);
    poster.classList.add(hiddenClass);
    video.play();

    video.addEventListener('ended', () => {
      playButton.classList.remove(hiddenClass);
      poster.classList.remove(hiddenClass);
    });
  };
  if (video) {
    playButton.addEventListener('click', playVideo);
  }
})();

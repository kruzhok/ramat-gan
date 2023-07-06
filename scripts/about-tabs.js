(function() { // tabs "about-tabs"
  const tabs = document.querySelector('.about-tabs__list');
  const toggleTabs = (event) => {
    if (event.target.closest('.about-tabs__button')) {
      event.preventDefault();

      const tab = event.target.parentElement;
      if (tab.classList.contains('about-tabs__item_opened')) {
        tab.classList.remove('about-tabs__item_opened');
      } else {
        tab.classList.add('about-tabs__item_opened');
      }

    }
  }
  tabs.addEventListener('click', toggleTabs);
})();

(function() { // gallery about
  const swiper = new Swiper('.gallery-about', {
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

(function() { // video play
  const playButton = document.querySelector('.section__video-play');
  const poster = document.querySelector('.section__video-cover');
  const video = document.querySelector('.section__video');

  const playVideo = (evt) => {
    evt.preventDefault();
    playButton.remove();
    poster.remove();
    video.play();
  }

  playButton.addEventListener('click', playVideo)
})();

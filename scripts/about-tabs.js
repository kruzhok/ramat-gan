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


(function() { // video poster
  const video = document.querySelector('.section__video');
  const changePoster = () => {
    if (document.querySelector('body').clientWidth <= 600) {
      video.poster = './images/about/cover-mob.jpg';
    } else {
      video.poster = './images/about/cover.jpg';
    }
  };

  window.addEventListener('resize', ()=>{
    setTimeout(changePoster, 100);
  });
})();

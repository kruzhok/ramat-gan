import { dataArray } from './data.js';
import { baseURL } from './config.js';

const cards = document.querySelectorAll('.clickable-card');
const popupTmp = document.querySelector('.slider-popup-template');
const slideTemplate = document.querySelector('.card-slide-tmp');

cards.forEach((item) => {
  let popup;
  item.onclick = () => {
    setTimeout(() => {
      document.querySelector('.cards-popup').style.opacity = '1';
      document.body.classList.add('blured');
    }, 0);

    document.body.classList.add('scroll-blocker');
    const dataForClickedCard = findWithId(dataArray, item.id);
    generateSlider(popupTmp, dataForClickedCard, document.body);
    popup = document.querySelector('.cards-popup');
    dataForClickedCard.content.forEach((item) => {
      generateSlide(
        slideTemplate,
        item,
        popup.querySelector('.swiper-wrapper')
      );
    });

    popup.onclick = (e) => {
      if (e.target.contains(document.querySelector('.cards-popup-slider'))) {
        document.body.classList.remove('blured');
        document.querySelector('.cards-popup').style.opacity = '0';
        document.body.classList.remove('scroll-blocker');
        setTimeout(() => popup.remove(), 500);
      }
    };
    document.querySelector('.popup-close-button').onclick = () => {
      document.body.classList.remove('blured');
      document.querySelector('.cards-popup').style.opacity = '0';
      document.body.classList.remove('scroll-blocker');
      setTimeout(() => popup.remove(), 500);
    };
    initializeSwiper();
    // Управляем копированием адреса по ссылке на кнопку шера
    const shareLinkButton = popup.querySelector('.link-share');
    shareLinkButton.onclick = function () {
      navigator.clipboard.writeText(shareLinkButton.getAttribute('data-href'));
      const copyTooltip = popup.querySelector('.popup-tooltip');
      copyTooltip.style.opacity = '1';
      copyTooltip.setAttribute('aria-hidden', 'false');
      setTimeout(() => {
        copyTooltip.style.opacity = '0';
        copyTooltip.setAttribute('aria-hidden', 'true');
      }, 3000);
    };
  };
});

function findWithId(data, id) {
  const item = data.find((el) => {
    return el.id === id;
  });
  return item;
}

function generateSlider(tmp, obj, parent) {
  const node = tmp.content.cloneNode(true);
  node.querySelector('.card-slide-illustration').src = obj.coverUrl;
  node
    .querySelector('.card-slide-illustration')
    .setAttribute('alt', obj.coverText);
  node.querySelector('.cards-popup-slider').classList.add(`theme-${obj.theme}`);
  const encodedShareURL = encodeURI(`${baseURL}/tips/${obj.slug}`);
  node
    .querySelector('.fb-share')
    .setAttribute(
      'href',
      `https://www.facebook.com/sharer/sharer.php?u=${encodedShareURL}`
    );
  node
    .querySelector('.tg-share')
    .setAttribute('href', `https://t.me/share/url?url=${encodedShareURL}`);
  node
    .querySelector('.tw-share')
    .setAttribute(
      'href',
      `https://twitter.com/intent/tweet?url=${encodedShareURL}`
    );
  node.querySelector('.link-share').setAttribute('data-href', encodedShareURL);
  parent.append(node);
}

function generateSlide(tmp, obj, slider) {
  const node = tmp.content.cloneNode(true);
  node.querySelector('.card-slide-content').innerHTML = obj.text;
  node.querySelector('.card-slide-author').innerHTML = obj.author;
  slider.append(node);
}

function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    keyboard: {
      enabled: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

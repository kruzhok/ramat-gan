import { dataArray } from './data.js';
import { baseURL } from './config.js';

// Определяет по дата-атрибуту body, про что страница и устанавливает класс неактивной карточки

const dataId = document.body.getAttribute('data-id');
const allCards = document.querySelectorAll('.card');
const currentCard = [...allCards].find((card) => card.id === dataId);
currentCard.classList.add('card_current');

// Берёт темплейт слайдов, наполняет его данными и подставляет в слайдер
const currentCardData = dataArray.find((item) => item.id === dataId);
const cardsSlider = document.querySelector('.cards-slider');
cardsSlider.classList.add(`theme-${currentCardData.theme}`);
const coverTemplate = document.querySelector('.cover-template');
const slideTemplate = document.querySelector('.slide-template');

const cover = coverTemplate.content.cloneNode(true);
cover.querySelector('.card-slide-illustration').src = currentCardData.coverUrl;
cover.querySelector('.card-slide-illustration').alt = currentCardData.coverText;
document.querySelector('.swiper-wrapper').append(cover);

currentCardData.content.forEach((item) => {
  const slide = slideTemplate.content.cloneNode(true);
  slide.querySelector('.card-slide-content').innerHTML = item.text;
  slide.querySelector('.card-slide-author').innerHTML = item.author;
  document.querySelector('.swiper-wrapper').append(slide);
});

// Включаем функциональность слайдера
initializeSwiper();

// Устанавливает ссылки шеринга
const encodedShareURL = encodeURI(`${baseURL}/tips/${currentCardData.slug}`);
document
  .querySelector('.fb-share')
  .setAttribute(
    'href',
    `https://www.facebook.com/sharer/sharer.php?u=${encodedShareURL}`
  );
document
  .querySelector('.tg-share')
  .setAttribute('href', `https://t.me/share/url?url=${encodedShareURL}`);
document
  .querySelector('.tw-share')
  .setAttribute(
    'href',
    `https://twitter.com/intent/tweet?url=${encodedShareURL}`
  );
document
  .querySelector('.link-share')
  .setAttribute('data-href', encodedShareURL);

const shareLinkButton = document.querySelector('.link-share');
shareLinkButton.onclick = function () {
  navigator.clipboard.writeText(shareLinkButton.getAttribute('data-href'));
  const copyTooltip = document.querySelector('.link-shared-tooltip');
  copyTooltip.style.opacity = '1';
  copyTooltip.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    copyTooltip.style.opacity = '0';
    copyTooltip.setAttribute('aria-hidden', 'true');
  }, 3000);
};

// Инициализирует свайпер
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

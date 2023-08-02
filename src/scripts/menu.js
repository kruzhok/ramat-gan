const openBtn = document.querySelector('.menu-button--open');
const closeBtn = document.querySelector('.menu-button--close');
const menu = document.querySelector('.header-menu');

openBtn.onclick = () => {
  menu.style.transition = 'transform 1s';
  menu.classList.add('opened');
  document.body.classList.add('scroll-blocker');
};

closeBtn.onclick = () => {
  menu.classList.remove('opened');
  document.body.classList.remove('scroll-blocker');
};

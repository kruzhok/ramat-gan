const tooltip = document.querySelector('.index-logo-tooltip');
const toggler = document.querySelector('.index-star');

let isShown = false;

toggler.onclick = () => {
  if(!isShown) {
    tooltip.style.opacity = '1';
    isShown = true;
  } else {
    tooltip.style.opacity = '0';
    isShown = false;
  }
}


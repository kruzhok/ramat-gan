const picture = document.querySelectorAll('.bench__illustration');
const spacer = document.querySelector('.spacer');
const overlay = document.querySelector('.things');

function controllOpacity(el, state) {
  if (state === 'on') {
    el.forEach((item) => item.classList.add('add-opacity'));
  }
  if (state === 'off') {
    el.forEach((item) => item.classList.remove('add-opacity'));
  }
}

const overlayOptions = {
  rootMargin: '100px 0px 0px 0px',
  threshold: 0.1,
};

const overlayCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      controllOpacity(picture, 'on');
    } else {
      controllOpacity(picture, 'off');
    }
  });
};

const overlayObserver = new IntersectionObserver(
  overlayCallback,
  overlayOptions
);

overlayObserver.observe(overlay);

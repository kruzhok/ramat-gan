const picture = document.querySelector('.bench__illustration');
const spacer = document.querySelector('.spacer');
const overlay = document.querySelector('.things');

function controllOpacity(el, state) {
  if(state === 'on') {
    el.classList.add('add-opacity');
  }
  if(state=== 'off') {
    el.classList.remove('add-opacity');
  }
}

const options = {
  rootMargin: '100px 0px 0px 0px',
  threshold: 0,
}

const callback = (entries, observer) => {

  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if(entry.isIntersecting) {
      if(entry.target === overlay) {
        controllOpacity(picture, 'on');
      }
      if(entry.target === spacer) {
        controllOpacity(picture, 'off');
      }
    } else {
      if(entry.target === spacer) {
        controllOpacity(picture, 'on');
      }
      if(entry.target === overlay) {
        controllOpacity(picture, 'off');
      }

    }
  })
}

const overlayObserver = new IntersectionObserver(callback, options);

[overlay, spacer].forEach(item => {
  overlayObserver.observe(item);
})



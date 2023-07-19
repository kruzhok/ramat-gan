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

const overlayOptions = {
  rootMargin: '100px 0px 0px 0px',
  threshold: 0.1,
}

const overlayCallback = (entries, observer) => {

  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      controllOpacity(picture, 'on')
    }
    else {
      controllOpacity(picture, 'off')
    }

  })
}


const spacerOptions = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.95,
}

const spacerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      document.querySelector('.bench').classList.add('on-intersection');
    }
    else {
      document.querySelector('.bench').classList.remove('on-intersection');
    }
  })
}

const overlayObserver = new IntersectionObserver(overlayCallback, overlayOptions);
const spacerObserver = new IntersectionObserver(spacerCallback, spacerOptions);


overlayObserver.observe(overlay);
spacerObserver.observe(spacer);

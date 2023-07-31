const logo = document.querySelector('.animated-logo');

const options = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0,
};

const callback = (entries, observer) => {
  entries.forEach((item) => {
    if (item.isIntersecting) {
      logo.classList.add('animated-logo_is-animated');
    } else {
      logo.classList.remove('animated-logo_is-animated');
    }
  });
};

const logoObserver = new IntersectionObserver(callback, options);

logoObserver.observe(logo);

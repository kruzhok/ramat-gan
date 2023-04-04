const dataArray = [
  {
    id: 'support',
    theme: 'purple',
    coverUrl: '/images/covers-svg/1.svg',
    coverText: 'Илья, Юра и Саша о доступных способах самоподдержки в начале адаптации',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
  {
    id: 'films',
    theme: 'lightpurple',
    coverUrl: '/images/covers-svg/2.svg',
    coverText: 'Данина подборка фильмов с ультра-короткими рецензиями в твиттер-формате',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
  {
    id: 'emotions',
    theme: 'lightyellow',
    coverUrl: '/images/covers-svg/3.svg',
    coverText: 'Игорь и Эдуард проведут от гнева и тревоги к спокойствию и даже надежде',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
  {
    id: 'space',
    theme: 'darkgreen',
    coverUrl: '/images/covers-svg/4.svg',
    coverText: 'Илья, Полина, Дария и Игорь про то, как осваиваться в новой стране',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
  {
    id: 'contact',
    theme: 'darkorange',
    coverUrl: '/images/covers-svg/5.svg',
    coverText: 'Саша, Игорь и Полина о том, как контактировать с людьми',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
   {
    id: 'talk',
    theme: 'purple',
    coverUrl: '/images/covers-svg/6.svg',
    coverText: 'Оригинальный способ найти собеседников от Шимона',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
  {
    id: 'activity',
    theme: 'lightpurple',
    coverUrl: '/images/covers-svg/7.svg',
    coverText: 'Как переключить себя в конструктивную деятельность',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
  {
    id: 'change',
    theme: 'yellow',
    coverUrl: '/images/covers-svg/8.svg',
    coverText: 'Что делать для того, чтобы ещё лучше понимать местную обстановку',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
  {
    id: 'advice',
    theme: 'darkgreen',
    coverUrl: '/images/covers-svg/9.svg',
    coverText: 'Мудрость Ализы и Ильи в четырёх абзацах',
    content: [
      {
        text: 'Привет',
        image: '',
        author: 'Петя'
      },
      {
        text: 'Shalom',
        image: '',
        author: 'Вася'
      }
    ]
  },
]





const cards = document.querySelectorAll('.clickable-card');
const popupTmp = document.querySelector('.slider-popup-template');
const slideTemplate = document.querySelector('.card-slide-tmp');

let isOpened = false;

cards.forEach((item) => {
  let popup;
  item.onclick = () => {
    document.body.style.overflow = 'hidden';
    const dataForClickedCard = findWithId(dataArray, item.id)
    generateSlider(popupTmp, dataForClickedCard, document.body)
    popup = document.querySelector('.cards-popup');
    dataForClickedCard.content.forEach(item => {
      generateSlide(slideTemplate, item, popup.querySelector('.swiper-wrapper'));
    })
    
    popup.onclick = (e) => {
      if(e.target.contains(document.querySelector('.cards-popup-slider'))) {
        document.body.style.overflow = 'auto';
        popup.remove();
      }
    }
    initializeSwiper()
  }
})



function findWithId(data, id) {
  const item = data.find((el) => {
    return el.id === id;
  })
  return item;
}

function generateSlider(tmp, obj, parent) {
  const node = tmp.content.cloneNode(true);
  node.querySelector('.card-slide-illustration').src = obj.coverUrl;
  node.querySelector('.cards-popup-slider').classList.add(`theme-${obj.theme}`)
  node.querySelector('.card-slide-cover-text').textContent = obj.coverText;
  parent.append(node);
}

function generateSlide(tmp, obj, slider) {
  const node = tmp.content.cloneNode(true);
  node.querySelector('.card-slide-content').textContent = obj.text;
  node.querySelector('.card-slide-author').textContent = obj.author;
  slider.append(node);
}

function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}






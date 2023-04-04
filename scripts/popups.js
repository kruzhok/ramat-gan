const dataArray = [
  {
    id: 'support',
    theme: 'darkgreen',
    coverUrl: '/images/covers-svg/support.svg',
    coverText: 'Текст под саппортом',
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
    id: 'friends',
    theme: 'lightpurple',
    coverUrl: '/images/covers-svg/how-to-find-friends.svg',
    coverText: 'История о том, как Сёма была в полиции и узнала много нового',
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
    id: 'help',
    theme: 'yellow',
    coverUrl: '/images/covers-svg/how-to-find-friends.svg',
    coverText: 'История о том, как Сёма была в полиции и узнала много нового',
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
  }
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






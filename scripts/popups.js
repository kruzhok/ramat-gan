const dataArray = [
  {
    id: 'support',
    theme: 'darkgreen',
    coverUrl: '/images/covers-svg/support.svg',
    coverText: 'Текст под саппортом',
    content: [
      {
        text: 'Привет',
        image: ''
      },
      {
        text: 'Shalom',
        image: ''
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
        image: ''
      },
      {
        text: 'Shalom',
        image: ''
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
        image: ''
      },
      {
        text: 'Shalom',
        image: ''
      }
    ]
  }
]




const popup = document.querySelector('.cards-popup');
const cards = document.querySelectorAll('.clickable-card');
const slideTemplate = document.querySelector('.card-slide-tmp');
const slider = document.querySelector('.cards-popup-slider .swiper-wrapper');

let isOpened = false;

cards.forEach((item) => {
  item.onclick = () => {
    popup.classList.add('is-opened');
    document.body.style.overflow = 'hidden';
    isOpened = true;
    const dataForClickedCard = findWithId(dataArray, item.id)
    console.log(dataForClickedCard);
    document.querySelector('.cards-popup-slider').classList.add(`theme-${dataForClickedCard.theme}`)
    document.querySelector('.card-slide-illustration').src = dataForClickedCard.coverUrl;
    document.querySelector('.card-slide-cover-text').textContent = dataForClickedCard.coverText;
    dataForClickedCard.content.forEach((obj) => {
      generateSlide(slideTemplate, obj, slider);
    })
  }
})

popup.onclick = (e) => {
  if(e.target.contains(document.querySelector('.cards-popup-slider'))) {
    popup.classList.remove('is-opened');
    document.querySelector('.cards-popup-slider').className = 'cards-popup-slider swiper';
    popup.querySelectorAll('.swiper-slide').forEach(item => {
      if(![...item.classList].includes('card-slide-cover')) {
        item.remove();
      }
    })
    document.body.style.overflow = 'auto';
    isOpened = false;

  }
}

function findWithId(data, id) {
  const item = data.find((el) => {
    return el.id === id;
  })
  return item;
}

function generateSlide(tmp, obj, slider) {
  const node = tmp.content.cloneNode(true);
  node.querySelector('.card-slide-content').textContent = obj.text;
  slider.append(node);
}






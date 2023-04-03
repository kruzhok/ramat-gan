const allVideoCircles = document.querySelectorAll('.video-circle video');

allVideoCircles.forEach(item => {
  const playMode = item.getAttribute('data-playmode')
  item.oncanplay = () => {
    if(playMode==='autoplay') {
      item.play()
    }
    if(playMode==='onhover') {
      item.onmouseover = () => {
        item.play();
      }
      item.onmouseleave = () => {
        item.pause();
      }
    }
  }
})
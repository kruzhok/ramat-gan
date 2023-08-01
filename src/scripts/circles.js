const toggleOpacity = (video) => {
  if (video.classList.contains('masked-video-visible')) {
    video.classList.remove('masked-video-visible');
  } else {
    video.classList.add('masked-video-visible');
  }
};

(function () {
  const videos = Array.from(document.querySelectorAll('.masked-video'));

  videos.forEach((video) => {
    video.addEventListener('mouseover', () => {
      toggleOpacity(video);
    });

    video.addEventListener('click', (e) => {
      e.preventDefault();
      toggleOpacity(video);
    });

    video.addEventListener('touchstart', (e) => {
      e.preventDefault();
      toggleOpacity(video);
    });
  });
})();

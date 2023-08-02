const body = document.querySelector('.index');
const fixedSection = document.querySelector('.lost');

function drawBack(el, source) {
  const color = getComputedStyle(source).backgroundColor;
  const height = getComputedStyle(source).height;
  const finalColor = getComputedStyle(el).backgroundColor;
  el.style.backgroundImage = `linear-gradient(to top, ${color} ${height}, ${finalColor} ${height} 100%)`;
}

setTimeout(() => {
  drawBack(body, fixedSection);
}, 1000);

window.onresize = () => {
  setTimeout(() => {
    drawBack(body, fixedSection);
  }, 50);
};

(function () {
  // tabs "about-tabs"
  const tabs = document.querySelector('.about-tabs__list');
  const toggleTabs = (event) => {
    if (event.target.closest('.about-tabs__button')) {
      event.preventDefault();

      const tab = event.target.parentElement;
      if (tab.classList.contains('about-tabs__item_opened')) {
        tab.classList.remove('about-tabs__item_opened');
      } else {
        tab.classList.add('about-tabs__item_opened');
      }
    }
  };
  tabs.addEventListener('click', toggleTabs);
})();

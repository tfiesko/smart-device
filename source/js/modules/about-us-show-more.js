const showMoreButton = document.querySelector('[data-show-more-button]');
const aboutUsConteiner = document.querySelector('[data-is-full-size]');

showMoreButton.addEventListener('click', () => {
  if (aboutUsConteiner.getAttribute('data-is-full-size') === 'not-full-size') {
    aboutUsConteiner.dataset.isFullSize = 'full-size';
    showMoreButton.textContent = 'Свернуть';
  } else if (aboutUsConteiner.getAttribute('data-is-full-size') === 'full-size') {
    aboutUsConteiner.dataset.isFullSize = 'not-full-size';
    showMoreButton.textContent = 'Подробнее';
  }
});

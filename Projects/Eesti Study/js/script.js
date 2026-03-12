'use strict';

const verbsGridContainerEL = document.querySelector(`.verbs-grid-container`);
const wordHidden = document.querySelectorAll(`.word-hidden`);
const gridContainer = document.querySelector(`.verbs-grid-container`);

function addOpacityEffect(element) {
  element.addEventListener(`click`, function () {
    element.style.opacity = 1;
    setTimeout(() => {
      element.style.opacity = 0;
    }, 2000);
  });
}

// fetch the json and add the words to the html

fetch('./js/vocabulary.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(pair => {
      const html = `
    <p class="word-visible word">${pair.en}</p>
    <div class="hidden-box">
    <span class="word-hidden word">${pair.ee}</span>
    </div>`;
      verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
    });

    data.forEach(pair => {
      const html = `
          <div class="word-box hidden-box">
          <p class="word-hidden word">${pair.en}</p>
          </div>
          <div class="word-box visible-box">
          <p class="word-visible word">${pair.ee}</p>
          </div>`;
      verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
    });
  });

// Shows and hides the hidden word for mobile support
if (gridContainer) {
  const wordHidden = gridContainer.querySelectorAll('.word-hidden');

  wordHidden.forEach(hiddenCell => {
    hiddenCell.addEventListener('click', function (event) {
      event.stopPropagation();

      hiddenCell.style.opacity = 1;

      setTimeout(() => {
        hiddenCell.style.opacity = 0;
      }, 3000);
    });
  });
} else {
  console.log('class not found');
}

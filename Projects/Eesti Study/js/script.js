'use strict';

const verbsGridContainerEL = document.querySelector(`.verbs-grid-container`);
const wordHidden = document.querySelectorAll(`.word-hidden`);
const gridContainer = document.querySelector(`.verbs-grid-container`);

const vocabulary = [
  { en: 'To have to', ee: 'pidama, pean' },
  { en: 'To know how to do something', ee: 'oskama, oskata, oskan' },
  { en: 'To can, to be allowed', ee: 'võima, võin' },
  { en: 'To be able to, to receive', ee: 'saama, saada, saan' },
  { en: 'To offer', ee: 'pakkuma, pakkuda, pakun' },
  { en: 'To apply', ee: 'kandideerima, kandideerida, kandideerin' },
  { en: 'To send', ee: 'saatma, saata, saadan' },
  { en: 'To hire', ee: 'palkama, palgata, palkan' },
  { en: 'To earn', ee: 'teenima, teenida, teenin' },
  { en: 'To hope', ee: 'lootma, loota, loodan' },
  { en: 'To fear', ee: 'kartma, karta, kardan' },
  { en: 'To help', ee: 'aitama, aidata, aitan' },
  { en: 'To teach', ee: 'õpetama, õpetada, õpetan' },
  { en: 'To study', ee: 'õppima, õppida, õpin' },
  { en: 'To mean', ee: 'tähendama, tähendada, tähendab' },
  { en: 'To translate', ee: 'tõlkima, tõlkida, tõlgin' },
  { en: 'To repeat', ee: 'kordama, korrata, kordan' },
  { en: 'To wait', ee: 'ootama, oodata, ootan' },
  { en: 'To fly', ee: 'lendama, lennata, lendan' },
  { en: 'To live', ee: 'Elama, Elada, Ela' },
  { en: 'To read', ee: 'Lugema, lugeda, loe' },
  { en: 'To write', ee: 'kirjutama, kirjutada, kirjutan' },
  { en: 'To sleep', ee: 'magama' },
];

function addOpacityEffect(element) {
  element.addEventListener(`click`, function () {
    element.style.opacity = 1;
    setTimeout(() => {
      element.style.opacity = 0;
    }, 2000);
  });
}

// fetch the json and add the words to the html
/*
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
*/

vocabulary.forEach(pair => {
  const html = `
    <p class="word-visible word">${pair.en}</p>
    <div class="hidden-box">
    <span class="word-hidden word">${pair.ee}</span>
    </div>`;
  verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
});

vocabulary.forEach(pair => {
  const html = `
    <div class="word-box hidden-box">
    <p class="word-hidden word">${pair.en}</p>
    </div>
    <div class="word-box visible-box">
    <p class="word-visible word">${pair.ee}</p>
    </div>`;
  verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
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

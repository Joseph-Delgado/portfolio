'use strict';

const verbsGridContainerEL = document.querySelector(`.verbs-grid-container`);
const wordHidden = document.querySelectorAll(`.word-hidden`);

const vocabulary = [
  { en: 'To have to', ee: 'pidama, pean' },
  { en: 'To know how to do something', ee: 'oskama, oskata, oskan' },
  { en: 'To can, to be allowed', ee: 'võima, võin' },
  { en: 'To be able to, to receive', ee: 'saama, saada, saan' },
  { en: 'To offer', ee: 'pakkuma, pakkuda, pakun' },
  { en: 'To apply', ee: 'kandideerima, kandideerida,<br />kandideerin' },
  { en: 'To send', ee: 'saatma, saata, saadan' },
  { en: 'To hire', ee: 'palkama, palgata, palkan' },
  { en: 'To earn', ee: 'teenima, teenida, teenin' },
  { en: 'To hope', ee: 'lootma, loota, loodan' },
  { en: 'To fear', ee: 'kartma, karta, kardan' },
  { en: 'To help', ee: 'aitama, aidata, aitan' },
  { en: 'To teach', ee: 'õpetama, õpetada, õpetan' },
  { en: 'To study', ee: 'õppima, õppida, õpin' },
  { en: 'To mean', ee: 'tähendama, tähendada,<br />tähendab' },
  { en: 'To translate', ee: 'tõlkima, tõlkida, tõlgin' },
  { en: 'To repeat', ee: 'kordama, korrata, kordan' },
  { en: 'To wait', ee: 'ootama, oodata, ootan' },
  { en: 'To fly', ee: 'lendama, lennata, lendan' },
  { en: 'good morning', ee: 'Tere hommikust' },
  { en: 'good day', ee: 'Tere paevast' },
  { en: 'good afternoon/evening', ee: 'Tere õhtust' },
  { en: 'hello', ee: 'Tere ' },
  { en: 'hi', ee: 'Tervist ' },
  { en: 'see you!', ee: 'Nägemiseni ' },
  { en: 'see you! bye!', ee: 'Nägamist ' },
  { en: 'goodbye!', ee: 'Head aega' },
  { en: 'Have a nice evening!', ee: 'Head õhtut' },
  { en: 'good night!', ee: 'Head ööd' },
  { en: 'All the best!', ee: 'Kõike head' },
  { en: 'see you!', ee: 'Kohtumiseni ' },
  { en: 'excuse me', ee: 'Vabandage mind' },
  { en: 'To live', ee: 'Elama, Elada, Ela' },
  { en: 'to read', ee: 'Lugema, lugeda, loe' },
  { en: 'Winter', ee: 'talv' },
  { en: 'Spring', ee: 'kevad' },
  { en: 'Summer', ee: 'suvi' },
  { en: 'Autumn', ee: 'sügis' },
  { en: 'Year', ee: 'aasta' },
  { en: 'season', ee: 'aastajad' },
  { en: 'month', ee: 'kuud' },
  { en: 'before', ee: 'enne' },
  { en: 'after', ee: 'perast' },
  { en: 'lets get acquinted', ee: 'Saage tuttavaks' },
  { en: 'teacher', ee: 'õpetaja, õpetaja,<br />õpetajat/õpetajaid' },
  { en: 'Doctor ', ee: 'Arst, arsti, arsti/arste' },
  { en: 'Driver ', ee: 'Autojuht, autojuhi,<br />autojuhti / autojuhte' },
  { en: 'Builder ', ee: 'Ehita, ehitaja,<br />ehitajat / ehitajaid' },
  {
    en: 'Waiter',
    ee: 'Ettekandja, ettekandja,<br />ettekandjat / ettekandjaid',
  },
  { en: 'Cute', ee: 'armas' },
  { en: 'Fruit', ee: 'puuvili' },
];

function addOpacityEffect(element) {
  element.addEventListener(`click`, function () {
    element.style.opacity = 1;
    setTimeout(() => {
      element.style.opacity = 0;
    }, 2000);
  });
}

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
          <div class="hidden-box">
          <p class="word-hidden word">${pair.en}</p>
          </div>
          <p class="word-visible word">${pair.ee}</p>
          `;
  verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
});

const gridContainer = document.querySelector(`.verbs-grid-container`);

if (gridContainer) {
  const wordHidden = gridContainer.querySelectorAll('.word-hidden');

  wordHidden.forEach(hiddenCell => {
    hiddenCell.addEventListener('click', function (event) {
      event.stopPropagation();

      hiddenCell.style.opacity = 1;

      setTimeout(() => {
        hiddenCell.style.opacity = 0;
      }, 3000); // 2 seconds + 2 seconds

      // console.log('clicked');
    });
  });
} else {
  console.log('class not found');
}

// console.log("hello world");

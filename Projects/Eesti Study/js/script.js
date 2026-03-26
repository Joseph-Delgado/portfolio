'use strict';

const verbsGridContainerEL = document.querySelector(`.verbs-grid-container`);
const professionsGridContainerEL = document.querySelector(
  `.professions-grid-container`,
);
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
  { en: 'Year', ee: 'aasta' },
  { en: 'season', ee: 'aastajad' },
  { en: 'month', ee: 'kuud' },
  { en: 'Winter', ee: 'talv' },
  { en: 'Spring', ee: 'kevad' },
  { en: 'Summer', ee: 'suvi' },
  { en: 'Autumn', ee: 'sügis' },
  { en: 'excuse me', ee: 'Vabandage mind' },
  { en: 'lets get acquinted', ee: 'Saage tuttavaks' },
  { en: 'Teacher', ee: 'õpetaja, õpetaja, õpetajat/õpetajaid' },
  { en: 'Doctor ', ee: 'Arst, arsti, arsti/arste' },
  { en: 'Driver ', ee: 'Autojuht, autojuhi, autojuhti / autojuhte' },
  { en: 'Builder ', ee: 'Ehita, ehitaja, ehitajat / ehitajaid' },
  {
    en: 'Waiter',
    ee: 'Ettekandja, ettekandja, ettekandjat / ettekandjaid',
  },
  { en: 'Hairdresser', ee: 'Juuksur, juuksuri, juuksurit / juuksureid' },
  { en: 'Chef', ee: 'Kokk, Koka, Kokka, / Kokki' },
  { en: 'Cleaner', ee: 'Koristaja, Koristaja, Koristajat / Koristajaid' },
  { en: 'Translator', ee: 'Tõlkija, Tõlkija, Tõlkijat - Tõlkijaid' },
  { en: 'Writer', ee: 'kirjanik, kirjaniku, kirjanikku / kirjanikke' },
  {
    en: 'nanny',
    ee: 'lapsehoidja, lapsehoidja, lapsehoidjat / lapsehoidjaid',
  },
  { en: 'seller', ee: 'müüja, müüja, müüjat / müüjaid' },
  {
    en: 'police officer',
    ee: 'politseinik, politseiniku, politseinikku / politseinikke',
  },
  {
    en: 'journalist',
    ee: 'ajakirjanik, ajakirjaniku, ajakirjanikku / ajakirjanikke',
  },
  { en: 'artist', ee: 'kunstnik, kunstniku, kunstnikku / kunstnikke' },
  {
    en: 'programmer',
    ee: 'programmeerija, programmeerija, programmeerijat / programmeerijaid',
  },
  { en: 'singer', ee: 'laulja, laulja, lauljat / lauljaid' },
  { en: 'scientist', ee: 'teadlane, teadlase, teadlast / teadlasi' },
  { en: 'architect', ee: 'arhitekt, arhitekti, arhitekti / arhitekte' },
  { en: 'Fruit', ee: 'puuvili' },
  { en: 'Cute', ee: 'armas' },
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
  { en: 'before', ee: 'enne' },
  { en: 'after', ee: 'perast' },
  { en: 'January', ee: 'Jaanuar' },
  { en: 'February', ee: 'Veebruar' },
  { en: 'March', ee: 'Märts' },
  { en: 'April', ee: 'Aprill' },
  { en: 'May', ee: 'Mai' },
  { en: 'June', ee: 'Juuni' },
  { en: 'July', ee: 'Juuli' },
  { en: 'August', ee: 'August' },
  { en: 'September', ee: 'September' },
  { en: 'October', ee: 'Oktoober' },
  { en: 'Novermber', ee: 'November' },
  { en: 'December', ee: 'Detsember' },
  { en: 'coworker', ee: 'töökaaslane' },
  { en: 'neighbour', ee: 'naaber' },
  { en: 'friend', ee: 'sõber' },
  { en: 'good acquaintance', ee: 'hea tuttav' },
  { en: 'boss', ee: 'ülemus' },
  { en: 'better', ee: 'parem' },
  { en: 'now', ee: 'praegu' },
  { en: 'when', ee: 'millal' },
  { en: 'who', ee: 'kes' },
  { en: 'do / are', ee: 'kas' },
  { en: 'surname', ee: 'perekonnanimi / perenimi' },
  { en: 'meal', ee: 'sööki' },
  { en: 'breakfast', ee: 'hommikusöök' },
  { en: 'lunch', ee: 'lõunasöök' },
  { en: 'dinner', ee: 'õhtusöök' },
  { en: 'first name', ee: 'eesnimi' },
  { en: 'television', ee: 'televiisorit' },
  { en: 'It is sunny', ee: 'Päike paistab' },
  { en: 'It is raining', ee: 'Vihma sajab' },
  { en: 'It is snowing', ee: 'Lund sajab' },
  { en: 'The weather is nice', ee: 'On ilus ilm' },
  { en: 'The weather is bad', ee: 'On kole ilm' },
  { en: 'There is thunder and lightning', ee: 'Müristab ja lööb äikest' },
  { en: 'The sky is clear', ee: 'Taevas on selge' },
  { en: 'It is cloudy', ee: 'On pilvine' },
  { en: 'It is windy', ee: 'On tuuline' },
  { en: 'It is foggy', ee: 'On udune' },
  { en: 'It is cold', ee: 'On külm' },
  { en: 'It is warm', ee: 'On soe' },
  { en: 'It is hot', ee: 'oskan küll' },
  { en: 'It is 25 degrees outside', ee: 'Väljas on 25 kraadi sooja' },
  { en: 'It is minus 2 degrees outside', ee: 'Väljas on 2 kraadi külma' },
  { en: 'hot', ee: 'palav' },
  { en: 'warm', ee: 'soe' },
  { en: 'cold', ee: 'külm' },
  {
    en: 'nice to meet you',
    ee: 'mis on sinu nimi, mis sinu nimi onmeeldib tutvuda',
  },
  {
    en: 'let me introduce you - this is my colleague [name]',
    ee: 'las/lubage ma tutvustan teid, see on minu kolleeg [name]',
  },
  { en: 'is it your boss', ee: 'kas on sinu ulemas' },
  { en: 'pen', ee: 'pastakas / pastapliiats' },
  { en: 'no thanks needed - no problem', ee: 'pole tänu väärt' },
  { en: 'ill bring it right away', ee: 'kohe toon' },
  { en: 'emotions', ee: 'emootsioonid' },
  { en: 'happy', ee: 'õnnelik' },
  { en: 'so', ee: 'nii' },
  { en: 'happy', ee: 'rõõmus' },
  { en: 'wonderful news', ee: 'suurepärane uudis' },
  { en: 'went', ee: 'läks' },
  { en: 'exam', ee: 'eksam' },
  { en: 'poorly', ee: 'halvasti' },
  { en: 'dissapointed', ee: 'pettinud' },
  { en: 'sad', ee: 'kurb' },
  { en: "don't worry", ee: 'ära muretse' },
  { en: 'real (very/a lot)', ee: 'tõeline' },
  { en: 'okay', ee: 'olgu' },
  { en: 'what a pity', ee: 'kui kahju' },
  { en: 'good / well / fluently', ee: 'hästi' },
  { en: 'unfortunately', ee: 'kahjuks' },
  { en: 'still', ee: 'alles' },
  { en: 'at all', ee: 'üldse' },
  { en: 'only', ee: 'ailult' },
  { en: 'yes i do', ee: 'olen küll' },
];

function addOpacityEffect(element) {
  element.addEventListener(`click`, function () {
    element.style.opacity = 1;
    setTimeout(() => {
      element.style.opacity = 0;
    }, 2000);
  });
}

////////////////////////////////////////
// Second Attempt
////////////////////////////////////////

let globalData;
async function fetchAndStoreVocabulary() {
  const response = await fetch(`./js/vocabulary.json`);
  const jsonData = await response.json();
  // console.log(jsonData[0]);
  globalData = jsonData;

  jsonData.forEach(wordObject => {
    const html = `
    <p class="word-visible word">${wordObject.en}</p>
    <div class="hidden-box">
    <span class="word-hidden word">${wordObject.ee}</span>
    </div>`;
    verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
  });

  jsonData.forEach(wordObject => {
    const html = `
    <div class="word-box hidden-box">
    <p class="word-hidden word">${wordObject.en}</p>
    </div>
    <div class="word-box visible-box">
    <p class="word-visible word">${wordObject.ee}</p>
    </div>`;
    verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
  });

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
}
fetchAndStoreVocabulary();

// (async () => {
//   await fetchAndStoreVocabulary();
//   console.log(globalData);
// })();

/*
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
  
  // add click listener
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
});
*/

// vocabulary.forEach(pair => {
//   const html = `
//     <p class="word-visible word">${pair.en}</p>
//     <div class="hidden-box">
//     <span class="word-hidden word">${pair.ee}</span>
//     </div>`;
//   verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
// });

// vocabulary.forEach(pair => {
//   const html = `
//     <div class="word-box hidden-box">
//     <p class="word-hidden word">${pair.en}</p>
//     </div>
//     <div class="word-box visible-box">
//     <p class="word-visible word">${pair.ee}</p>
//     </div>`;
//   verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
// });

// Shows and hides the hidden word for mobile support
// if (gridContainer) {
//   const wordHidden = gridContainer.querySelectorAll('.word-hidden');

//   wordHidden.forEach(hiddenCell => {
//     hiddenCell.addEventListener('click', function (event) {
//       event.stopPropagation();

//       hiddenCell.style.opacity = 1;

//       setTimeout(() => {
//         hiddenCell.style.opacity = 0;
//       }, 3000);
//     });
//   });
// } else {
//   console.log('class not found');
// }

'use strict';

const verbsGridContainerEL = document.querySelector(`.verbs-grid-container`);
const adjectiveGridContainerEL = document.querySelector(
  `.adjective-grid-container`,
);
const adverbGridContainerEL = document.querySelector(`.adverb-grid-container`);
const emotionGridContainerEL = document.querySelector(
  `.emotion-grid-container`,
);
const foodGridContainerEL = document.querySelector(`.food-grid-container`);
const greetingFarewellGridContainerEL = document.querySelector(
  `.greetingFarewell-grid-container`,
);
const interrogativeGridContainerEL = document.querySelector(
  `.interrogative-grid-container`,
);
const nounGridContainerEL = document.querySelector(`.noun-grid-container`);
const peopleGridContainerEL = document.querySelector(`.people-grid-container`);
const phraseGridContainerEL = document.querySelector(`.phrase-grid-container`);
const politenessGridContainerEL = document.querySelector(
  `.politeness-grid-container`,
);
const professionGridContainerEL = document.querySelector(
  `.profession-grid-container`,
);
const timeGridContainerEL = document.querySelector(`.time-grid-container`);
const weatherGridContainerEL = document.querySelector(
  `.weather-grid-container`,
);

const sectionWordsGenerelEL = document.querySelectorAll(
  `.section-words-general`,
);

///////////////////////////////////////////////////////////////
const wordHidden = document.querySelectorAll(`.word-hidden`);

function addOpacityEffect(element) {
  element.addEventListener(`click`, function () {
    element.style.opacity = 1;
    setTimeout(() => {
      element.style.opacity = 0;
    }, 2000);
  });
}

const populateList = function (wordType) {
  const firstObject = wordType[0];
  const typeValue = `${firstObject.type}`;
  // console.log(typeof typeValue);
  wordType.forEach(wordObject => {
    const html = `
    <p class="word-visible word grid-item">${wordObject.en}</p>
    <div class="hidden-box">
    <p class="word-hidden word grid-item">${wordObject.ee}</p>
    </div>`;
    document
      .querySelector(`.${typeValue}-grid-container`)
      .insertAdjacentHTML('beforeend', html);
    // verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
  });

  wordType.forEach(wordObject => {
    const html = `
    <div class="word-box hidden-box ">
    <p class="word-hidden word grid-item">${wordObject.en}</p>
    </div>
    <div class="word-box visible-box">
    <p class="word-visible word grid-item">${wordObject.ee}</p>
    </div>`;
    document
      .querySelector(`.${typeValue}-grid-container`)
      .insertAdjacentHTML('beforeend', html);
    // verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
  });

  if (document.querySelector(`.${typeValue}-grid-container`)) {
    const wordHidden = document
      .querySelector(`.${typeValue}-grid-container`)
      .querySelectorAll('.word-hidden');

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
};

// Fetch and Store

let vocabularyArr;
async function fetchAndStoreVocabulary() {
  const response = await fetch(`./js/vocabulary.json`);
  const jsonData = await response.json();
  // console.log(jsonData[0]);
  vocabularyArr = jsonData;
}
fetchAndStoreVocabulary();

////////////////////////////////////////
// Sorted filters
////////////////////////////////////////
// filter verbs
(async () => {
  await fetchAndStoreVocabulary();
  const verbs = vocabularyArr.filter(word => word.type.includes(`verbs`));
  populateList(verbs);
})();

// filter professions
(async () => {
  await fetchAndStoreVocabulary();
  const profession = vocabularyArr.filter(word =>
    word.type.includes(`profession`),
  );
  populateList(profession);
})();

// Greetins and farewells
(async () => {
  await fetchAndStoreVocabulary();
  const greetingFarewell = vocabularyArr.filter(word =>
    word.type.includes(`greetingFarewell`),
  );
  populateList(greetingFarewell);
})();

// interrogative
(async () => {
  await fetchAndStoreVocabulary();
  const interrogative = vocabularyArr.filter(word =>
    word.type.includes(`interrogative`),
  );
  populateList(interrogative);
})();

// People
(async () => {
  await fetchAndStoreVocabulary();
  const people = vocabularyArr.filter(word => word.type.includes(`people`));
  populateList(people);
})();

// Weather
(async () => {
  await fetchAndStoreVocabulary();
  const weather = vocabularyArr.filter(word => word.type.includes(`weather`));
  populateList(weather);
})();

// Time
(async () => {
  await fetchAndStoreVocabulary();
  const time = vocabularyArr.filter(word => word.type.includes(`time`));
  populateList(time);
})();

// Time
(async () => {
  await fetchAndStoreVocabulary();
  const daysOfWeek = vocabularyArr.filter(word =>
    word.type.includes(`daysOfWeek`),
  );
  populateList(daysOfWeek);
})();

// Phrases
(async () => {
  await fetchAndStoreVocabulary();
  const phrase = vocabularyArr.filter(word => word.type.includes(`phrase`));
  populateList(phrase);
})();

// Politeness
(async () => {
  await fetchAndStoreVocabulary();
  const politeness = vocabularyArr.filter(word =>
    word.type.includes(`politeness`),
  );
  populateList(politeness);
})();

// Small Words II
(async () => {
  await fetchAndStoreVocabulary();
  const smallWordsTwo = vocabularyArr.filter(word =>
    word.type.includes(`smallWordsTwo`),
  );
  populateList(smallWordsTwo);
})();

// Random Items
(async () => {
  await fetchAndStoreVocabulary();
  const items = vocabularyArr.filter(word => word.type.includes(`items`));
  populateList(items);
})();

// emotions
(async () => {
  await fetchAndStoreVocabulary();
  const emotion = vocabularyArr.filter(word => word.type.includes(`emotion`));
  populateList(emotion);
})();

// Foods
(async () => {
  await fetchAndStoreVocabulary();
  const food = vocabularyArr.filter(word => word.type.includes(`food`));
  populateList(food);
})();

// Unsorted
(async () => {
  await fetchAndStoreVocabulary();
  const toBeSorted = vocabularyArr.filter(word =>
    word.type.includes(`toBeSorted`),
  );
  populateList(toBeSorted);
})();

// new
(async () => {
  await fetchAndStoreVocabulary();
  const newlyAdded = vocabularyArr.filter(word =>
    word.type.includes(`newlyAdded`),
  );
  populateList(newlyAdded);
})();

// adjective
(async () => {
  await fetchAndStoreVocabulary();
  const adjective = vocabularyArr.filter(word =>
    word.type.includes(`adjective`),
  );
  populateList(adjective);
})();

// clothes
(async () => {
  await fetchAndStoreVocabulary();
  const clothes = vocabularyArr.filter(word => word.type.includes(`clothes`));
  populateList(clothes);
})();

// pronouns
(async () => {
  await fetchAndStoreVocabulary();
  const pronouns = vocabularyArr.filter(word => word.type.includes(`pronouns`));
  populateList(pronouns);
})();

// beginner
(async () => {
  await fetchAndStoreVocabulary();
  const beginner = vocabularyArr.filter(word => word.type.includes(`beginner`));
  populateList(beginner);
})();

// homework
(async () => {
  await fetchAndStoreVocabulary();
  const homework = vocabularyArr.filter(word => word.type.includes(`homework`));
  populateList(homework);
})();

(async () => {
  const backToTopBtn = function () {
    const html = `
    <div class="container-back-to-top">
    <a href="#" class="btn-back-to-top">Back to Top</a>
    </div>`;
    const sectionWordsGenerals = document.querySelectorAll(
      '.section-words-general',
    );

    sectionWordsGenerals.forEach(section => {
      section.insertAdjacentHTML('beforeend', html);
    });
  };
  backToTopBtn();
})();

////////////////////////////////////////
// All words
////////////////////////////////////////
/*
(async () => {
  await fetchAndStoreVocabulary();
  vocabularyArr.forEach(wordObject => {
    const html = `
    <p class="word-visible word">${wordObject.en}</p>
    <div class="hidden-box">
    <span class="word-hidden word">${wordObject.ee}</span>
    </div>`;
    verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
  });

  vocabularyArr.forEach(wordObject => {
    const html = `
    <div class="word-box hidden-box">
    <p class="word-hidden word">${wordObject.en}</p>
    </div>
    <div class="word-box visible-box">
    <p class="word-visible word">${wordObject.ee}</p>
    </div>`;
    verbsGridContainerEL.insertAdjacentHTML('beforeend', html);
  });

  if (verbsGridContainerEL) {
    const wordHidden = verbsGridContainerEL.querySelectorAll('.word-hidden');

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
})();
 */

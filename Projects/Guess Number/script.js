'use strict';

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `😄 Correct number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

////////////////////////////////////////
// Variables and functions
////////////////////////////////////////
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const setScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};
const setBackground = function (color) {
  document.querySelector(`body`).style.backgroundColor = color;
};
const secretNumberBoxSize = function (size) {
  document.querySelector(`.number`).style.width = size;
};
const displaySecret = function (secret) {
  document.querySelector(`.number`).textContent = secret;
};
const setHighscore = function (score) {
  document.querySelector(`.highscore`).textContent = score;
};

const geussedRight = function () {
  displayMessage(`😄 Correct number!`);
  displaySecret(secretNumber);
  setScore(score);
  setBackground(`#60b347`);
  secretNumberBoxSize(`30rem`);
};

// document.querySelector(`.guess`).addEventListener(`input`, function () {
//   console.log(`input detected`);
//   let text = document.querySelector(`.guess`).value;
//   let newText = text.replace();
//   document.querySelector(`.guess`).value = newText;
// });

document.querySelector(`.guess`).addEventListener(`click`, function () {
  this.select();
});

// const replace = function () {
//   let text = document.querySelector(`.guess`).value;
//   let newText = text.replace();
//   document.querySelector(`.guess`).value = newText;
// };

// Try Again
const tryAgain = document
  .querySelector(`.again`)
  .addEventListener(`click`, function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    setBackground(`#222`);
    displaySecret(`?`);
    displayMessage(`Start guessing...`);
    setScore(score);
    secretNumberBoxSize(`15rem`);
    document.querySelector(`.guess`).value = '';
  });

// Testing if numCheck function works
const numCheck = function (guessValue) {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guessValue);

  if (guessValue < 1 || guessValue > 20) {
    displayMessage(`out of range. chose between 1 and 20`);
  } else if (!guess) {
    // No input
    displayMessage(`⛔ No Number!`);

    // Win game
  } else if (guess === secretNumber) {
    geussedRight();

    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `📈 Too High` : `📉 Too Low`;
      score--;
      setScore(score);
    } else {
      displayMessage(`💥You lost the game`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
};

////////////////////////////////////////

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  // console.log(guess);

  if (guess < 1 || guess > 20) {
    displayMessage(`out of range. chose between 1 and 20`);
  } else if (!guess) {
    // No input
    displayMessage(`⛔ No Number!`);

    // Win game
  } else if (guess === secretNumber) {
    geussedRight();

    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `📈 Too High` : `📉 Too Low`;
      score--;
      setScore(score);
    } else {
      displayMessage(`💥You lost the game`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.addEventListener(`keydown`, function (e) {
  // console.log(e.key);

  if (e.key === `Enter`) {
    const guess = Number(document.querySelector(`.guess`).value);
    // console.log(guess);

    // number check function
    numCheck(guess);
  }
});

document.querySelector(`.check`).addEventListener(`click`, tryAgain);

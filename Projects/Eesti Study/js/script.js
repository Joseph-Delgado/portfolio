"use strict";

const verbsGridContainerEL = document.querySelector(`.verbs-grid-container`);

const vocabulary = [
  { en: "To have to", ee: "pidama, pean" },
  { en: "To know how to do something", ee: "oskama, oskata, oskan" },
  { en: "To can, to be allowed", ee: "võima, võin" },
  { en: "To be able to, to receive", ee: "saama, saada, saan" },
  { en: "To offer", ee: "pakkuma, pakkuda, pakun" },
  { en: "To apply", ee: "kandideerima, kandideerida, kandideerin" },
  { en: "To send", ee: "saatma, saata, saadan" },
  { en: "To hire", ee: "palkama, palgata, palkan" },
  { en: "To earn", ee: "teenima, teenida, teenin" },
  { en: "To hope", ee: "lootma, loota, loodan" },
  { en: "To fear", ee: "kartma, karta, kardan" },
  { en: "To help", ee: "aitama, aidata, aitan" },
  { en: "To teach", ee: "õpetama, õpetada, õpetan" },
  { en: "To study", ee: "õppima, õppida, õpin" },
  { en: "To mean", ee: "tähendama, tähendada, tähendab" },
  { en: "To translate", ee: "tõlkima, tõlkida, tõlgin" },
  { en: "To repeat", ee: "kordama, korrata, kordan" },
  { en: "To wait", ee: "ootama, oodata, ootan" },
  { en: "To fly", ee: "lendama, lennata, lendan" },
];

vocabulary.forEach((pair) => {
  const html = `
          <p class="word-show word">${pair.en}</p>
          <div class="hidden-box">
          <p class="word-hide word">${pair.ee}</p>
          </div>`;

  verbsGridContainerEL.insertAdjacentHTML("beforeend", html);
});

vocabulary.forEach((pair) => {
  const html = `
          <div class="hidden-box">
          <p class="word-hide word">${pair.en}</p>
          </div>
          <p class="word-show word">${pair.ee}</p>
          `;
  verbsGridContainerEL.insertAdjacentHTML("beforeend", html);
});

// console.log("hello world");

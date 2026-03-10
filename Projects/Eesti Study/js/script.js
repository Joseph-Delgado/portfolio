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
          <p class="word-en word">${pair.en}</p>
          <p class="word-ee word">${pair.ee}</p>`;

  verbsGridContainerEL.insertAdjacentHTML("beforeend", html);
});

// console.log("hello world");

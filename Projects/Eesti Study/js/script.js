"use strict";

const verbsGridContainerEL = document.querySelector(`.verbs-grid-container`);

const vocabulary = [
  { en: "To have to", ee: "pidama, pean" },
  { en: "To know how to do something", ee: "oskama, oskata, oskan" },
  { en: "To can, to be allowed", ee: "võima, võin" },
  { en: "To be able to, to receive", ee: "saama, saada, saan" },
  { en: "To offer", ee: "Pakkuma, pakkuda, pakun" },
  { en: "To apply", ee: "Kandideerima, kandideerida, kandideerin" },
  { en: "To send", ee: "Saatma, saata, saadan" },
  { en: "To hire", ee: "Palkama, palgata, palkan" },
  { en: "To earn", ee: "Teenima, teenida, teenin" },
  { en: "To hope", ee: "lootma, loota, loodan" },
  { en: "To fear", ee: "Kartma, karta, kardan" },
  { en: "To help", ee: "Aitama, tadata, aitan" },
  { en: "To teach", ee: "Õpetama, õpetada, õpetan" },
  { en: "To study", ee: "õppima, õppida, õpin" },
  { en: "To mean", ee: "tähendama, tähendada, tähendab" },
  { en: "To translate", ee: "Tõlkima, tõlkida, tõlgin" },
  { en: "To repeat", ee: "kordama, korrata, kordan" },
  { en: "To wait", ee: "Ootama, oodata, ootan" },
  { en: "To fly", ee: "Lendama, lennata, lendan" },
];

vocabulary.forEach((pair) => {
  const html = `
          <p class="word-en word">${pair.en}</p>
          <p class="word-ee word">${pair.ee}</p>`;

  verbsGridContainerEL.insertAdjacentHTML("beforeend", html);
});

// console.log("hello world");

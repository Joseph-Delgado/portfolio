"use sctrict";

// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let ctrlIcon = document.getElementById("ctrlIcon");

// song.onloadedmetadata = function () {
//   progress.max = song.duration;
//   progress.value = song.currentTime;
// };

// function playPause() {
//   if (ctrlIcon.classList.contains(`sprite.svg#play`)) {
//     song.pause();
//     ctrlIcon.classList.remove(`sprite.svg#play`);
//     ctrlIcon.classList.add(`sprite.svg#pause-outline`);
//   } else {
//     song.pause();
//     ctrlIcon.classList.add(`sprite.svg#play`);
//     ctrlIcon.classList.remove(`sprite.svg#pause-outline`);
//   }
// }

// pause-outline

console.log("Test");

const ad = document.querySelector(`.song`);
const playing = document.querySelector(`.play`);
const pause = document.querySelector(`.pause`);
const forward = document.querySelector(`.forward`);
const title = document.querySelector(`.title`);
const rewind = document.querySelector(`.backward`);
const artImage = document.querySelector(`#artist`);
const artName = document.querySelector(`#name`);
const playSong = document.querySelector(`#playsong`);

const artistName = [`JD`];
const artistSongTitle = [`Synthwave 1.0`];

playSong.addEventListener(`click`, effect);
function effect() {
  if (ad.duration == ad.currentTime) {
    x += 1;
    console.log(x);
  }
  if (!playing.classList.contains(`none`)) {
    ad.play();
    // setInterval(prog, 1000);
    // setInterval(line, 1000);
    // progres.addEventListener(`click`, (e) => {
    //   let widthbar2 = (e.offsetX / e.target.clientWidth) * ad.duration;
    //   ad.currentTime = widthbar2;
    // });
  } else {
    ad.pause();
  }
  title.classList.toggle(`run`);
  playing.classList.toggle(`none`);
  pause.classList.toggle(`none`);
  // artImage.classList.toggle(`round`); // currently no animation
}

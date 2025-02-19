'use strict';

const images = [
  "./assets/images/arch bg.png",
  "./assets/images/forgery.png",
  "./assets/images/red sandstone valley.png"
];

let currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 1000);

window.addEventListener("load", changeBackground);

'use strict';

const bgImages = [
  "./assets/images/arch bg.png",
  "./assets/images/forgery.png",
  "./assets/images/black museum.png"
];

let bgIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % bgImages.length;
}

setInterval(changeBackground, 5000);

window.addEventListener("load", changeBackground);

const cycleImages = [
    "./assets/images/people digging.png",
    "./assets/images/red sandstone valley.png",
    "./assets/images/ancient pot.png",
    "./assets/images/pickaxe.png",
    "./assets/images/fossil.png",
  ];
  
  let cycleIndex = 0;
  
  function changeImage(index) {
    cycleIndex = (index + cycleImages.length) % cycleImages.length;
    document.getElementById("main-image").src = cycleImages[cycleIndex];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("left-arrow").addEventListener("click", () => {
      changeImage(cycleIndex - 1);
    });
  
    document.getElementById("right-arrow").addEventListener("click", () => {
      changeImage(cycleIndex + 1);
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById("login");
  
  if (signUpButton) {
    signUpButton.addEventListener("click", function (event) {
      window.location.href = "login.html";
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
    
  if (menuButton) {
    menuButton.addEventListener("click", function (event) {
      window.location.href = "menu.html";
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const bookingButton = document.getElementById("booking");
      
  if (bookingButton) {
    bookingButton.addEventListener("click", function (event) {
      window.location.href = "booking.html";
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    // Load the saved theme from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      darkModeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    }
  
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
  
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
      } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
      }
    });
  });
  
  
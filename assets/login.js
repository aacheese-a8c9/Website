'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const leftBox = document.querySelector(".left-box");
    const loginButton = document.querySelector(".login-btn");

    function toggleTheme() {
        if (themeToggle.getAttribute("name") === "sunny") {
            themeToggle.setAttribute("name", "moon"); 
            body.classList.remove("light-mode");
            leftBox.classList.remove("light-box");
            loginButton.classList.remove("light-login");
        } else {
            themeToggle.setAttribute("name", "sunny");
            body.classList.add("light-mode");
            leftBox.classList.add("light-box");
            loginButton.classList.add("light-login");
        }
    }

    themeToggle.addEventListener("click", toggleTheme);
});

'use strict';

const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelector(".menu-items");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  menuItems.classList.toggle("active");
});

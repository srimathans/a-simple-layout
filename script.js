'use strict';

const hamburger = document.querySelector(".hamburger");
const mainNavList = document.querySelector(".main-nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainNavList.classList.toggle("active");
  });


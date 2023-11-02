"use strict";

// nav

// DOM Elements
const menuButton = document.querySelector("#menu-button");
const gridContainer = document.querySelector("#grid-container");
const siteHeader = document.querySelector("#site-header");
const mobileMediaQuery = window.matchMedia("(max-width: 550px)");

// Functions

function handleWindowChange(e) {
  if (e.matches) {
    gridContainer.classList.remove("menu-row");
  }
}

// Event Listeners
menuButton.addEventListener("click", () => {
  gridContainer.classList.toggle("menu-row");
});

// Event Listener to Register Changes
mobileMediaQuery.addListener(handleWindowChange);

// Initial Window Check
handleWindowChange(mobileMediaQuery);

// click off #header to close
document.addEventListener("click", (e) => {
  if (!(e.target === siteHeader || siteHeader.contains(e.target))) {
    document.querySelector("#grid-container").classList.remove("menu-row");
  }
});
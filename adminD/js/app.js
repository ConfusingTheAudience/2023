// SELECTING THING FROM MENU AND ADDING TO ACTIVITY PANEL
// MAIN MENU SELECTING CONTENT TO DISPLAY

const menuPick = document.querySelectorAll(".leftBar-nav-link");
const title = document.querySelector(".main-title");
const AcPanel = document.querySelector("#activity-panel");
const home = document.querySelector(".main-home");
const order = document.querySelector(".main-order");
const analytics = document.querySelector(".main-analytics");
const products = document.querySelector(".main-products");
const calendar = document.querySelector(".main-calendar");
const reports = document.querySelector(".main-reports");
const help = document.querySelector(".main-help");

menuPick.forEach((pick) => {
  pick.addEventListener("click", (e) => {
    let menuName = e.target.innerText;
    menuPick.forEach((pick) => {
      pick.classList.remove("current");
    });
    pick.classList.add("current");
    title.innerText = menuName;
    addToActivity(menuName);
    displayContent(menuName);
  });
});

function addToActivity(clickedName) {
  const newP = document.createElement("p");
  newP.textContent = clickedName;
  AcPanel.prepend(newP);
}

function displayContent(mainContentClicked) {
  home.classList.add("main-hide");
  order.classList.add("main-hide");
  analytics.classList.add("main-hide");
  products.classList.add("main-hide");
  calendar.classList.add("main-hide");
  reports.classList.add("main-hide");
  help.classList.add("main-hide");

  switch (mainContentClicked) {
    case "Home":
      home.classList.remove("main-hide");
      break;
    case "Orders":
      order.classList.remove("main-hide");
      break;
    case "Analytics":
      analytics.classList.remove("main-hide");
      break;
    case "Products":
      products.classList.remove("main-hide");
      break;
    case "Calendar":
      calendar.classList.remove("main-hide");
      break;
    case "Reports":
      reports.classList.remove("main-hide");
      break;
    case "Help":
      help.classList.remove("main-hide");
      break;
  }
}

// TIME

import * as Timer from "./timer.js";

// TOGGLER CUSTOMIZE HIDE/SHOW

import * as TogglerCustomize from "./togglercustomize.js";

// CHANGE THE THEMES

import * as ThemeChanger from "./themechange.js";

// MAIN-HOME SHOW DETAILS

import * as HomeDetails from "./homedetails.js";

// CUSTOMIZE STATUS DOTS

import * as StatusDots from "./statusdots.js";

// PRODUCT API and CONTENT

import * as Product from "./product.js";

// ORDER API and CONTENT

import * as Order from "./order.js";

// CALENDAR CONTENT

import * as Calendar from "./calendar.js";

// REPORTS CONTENT

import * as Report from "./reports.js";

export const customizeToggler = document.querySelector(".rightBar-toggler");
export const grid = document.querySelector(".container");
// used for order.js / product.js with leftBar
export const rightBar = document.querySelector(".rightBar");
export const rightBarTextSmall = document.querySelector(".rightBar-small");

export let showCustomizator = true;

customizeToggler.addEventListener("click", () => {
  grid.classList.toggle("hide-custom");
  rightBar.classList.toggle("hide");
  checkIsShown();
  customizeToggler.classList.toggle("hided");
  rightBarTextSmall.classList.toggle("hide");
});

export function checkIsShown() {
  if (showCustomizator) {
    customizeToggler.textContent = "<";
    showCustomizator = false;
  } else {
    customizeToggler.textContent = ">";
    showCustomizator = true;
  }
}

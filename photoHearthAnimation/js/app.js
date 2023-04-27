const heart = document.querySelector(".heart");
const img = document.querySelector("img");

img.addEventListener("click", (e) => {
  let myX = e.offsetX - 25;
  let myY = e.offsetY - 10;

  heart.style.top = `${myY}px`;
  heart.style.left = `${myX}px`;

  heart.classList.add("show");

  // it does solve the problem with setTimeout (waits until u stopped clicking to prevent heart remove)
  img.addEventListener("click", () => {
    clearTimeout(showMeHeart);
  });

  const showMeHeart = setTimeout(() => {
    heart.classList.remove("show");
  }, 1000);
});

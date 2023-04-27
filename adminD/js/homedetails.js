export const menuShow = document.querySelectorAll(".case-hider");
export const caseShow = document.querySelectorAll(".case-show");

menuShow.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedHomeInfo = e.target.dataset.show;
    if (clickedHomeInfo === "profile") {
      showHomeInfo(e.target, caseShow[0]);
    } else if (clickedHomeInfo === "earnings") {
      showHomeInfo(e.target, caseShow[1]);
    } else if (clickedHomeInfo === "orders") {
      showHomeInfo(e.target, caseShow[2]);
    } else if (clickedHomeInfo === "meetings") {
      showHomeInfo(e.target, caseShow[3]);
    }
  });
});

export function showHomeInfo(target, caser) {
  target.style.setProperty("display", "none");
  caser.style.setProperty("filter", "blur(0)");
  caser.style.setProperty("pointer-events", "auto");
}

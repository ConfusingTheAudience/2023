export const allThemes = document.querySelectorAll(".theme-switcher");

allThemes.forEach((theme) =>
  theme.addEventListener("click", (e) => {
    const clickedTheme = e.target.dataset.theme;
    checkColorTheme(clickedTheme);
  })
);

export function checkColorTheme(clickedTheme) {
  if (clickedTheme === "one") {
    document.documentElement.style.setProperty(
      "--leftRightBackgrounds",
      "#ffa500"
    );
    document.documentElement.style.setProperty(
      "--logoSpanTitleAndMainTitle",
      "#cc6a00"
    );
    document.documentElement.style.setProperty(
      "--notCurrentMenuPick",
      "#ffdead"
    );
  } else if (clickedTheme === "two") {
    document.documentElement.style.setProperty(
      "--leftRightBackgrounds",
      "#ffb2b2"
    );
    document.documentElement.style.setProperty(
      "--logoSpanTitleAndMainTitle",
      "red"
    );
    document.documentElement.style.setProperty(
      "--notCurrentMenuPick",
      "#e61919"
    );
  } else if (clickedTheme === "three") {
    document.documentElement.style.setProperty(
      "--leftRightBackgrounds",
      "bisque"
    );
    document.documentElement.style.setProperty(
      "--logoSpanTitleAndMainTitle",
      "#764c1a"
    );
    document.documentElement.style.setProperty(
      "--notCurrentMenuPick",
      "#7c6549"
    );
  } else if (clickedTheme === "four") {
    document.documentElement.style.setProperty(
      "--leftRightBackgrounds",
      "#d6cdff"
    );
    document.documentElement.style.setProperty(
      "--logoSpanTitleAndMainTitle",
      "rgb(53, 53, 255)"
    );
    document.documentElement.style.setProperty(
      "--notCurrentMenuPick",
      "#3535ff"
    );
  }
}

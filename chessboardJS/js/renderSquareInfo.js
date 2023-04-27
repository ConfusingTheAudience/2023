import { chessboard, files } from "./renderBoard.js";

export function renderSquareInfo() {
  const myBoarding = chessboard.children;
  let bottomRankIdx = 0;

  for (let sqRankInfo of myBoarding) {
    if (sqRankInfo.classList.contains("file-a")) {
      let idxRank = 8;
      sqRankInfo.childNodes.forEach((rank) => {

        const rankElem = document.createElement("div");
        rankElem.classList.add("square-number");
        rankElem.innerText = idxRank;
        rank.appendChild(rankElem);
        idxRank--;
      });
    }

    const bottomRank = sqRankInfo.childNodes[7];

    if (bottomRank) {
      const rankElem2 = document.createElement("div");
      rankElem2.classList.add("square-alphabet");
      rankElem2.innerText = files[bottomRankIdx];
      bottomRankIdx++;
      bottomRank.appendChild(rankElem2);
    }
  }
}

// STYLES -> NOTATION.CSS

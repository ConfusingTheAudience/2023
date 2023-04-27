export const chessboard = document.querySelector(".chessboard");
export const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(chessboard);

export function renderBoard() {
  for (let i = 0; i < 8; i++) {

    const fileRank = document.createElement("div");
    const indxOfFile = `file-${files[i]}`;

    fileRank.classList.add(indxOfFile);
    chessboard.appendChild(fileRank);

    let filesID = 8;

    for (let j = 0; j < 8; j++) {
      
      const mySquare = document.createElement("div");
      mySquare.classList.add("square");
      fileRank.appendChild(mySquare);

      mySquare.setAttribute("id", files[i] + filesID);
      filesID--;

      (j % 2 == 0 && i % 2 == 0) || (j % 2 == 1 && i % 2 == 1)
        ? mySquare.classList.add("square-white")
        : mySquare.classList.add("square-black");
    }
  }
}

// STYLES -> CHESSBOARD.CSS

import { chessboard } from "./renderBoard.js";

export function highlight() {
  const fileNodeList = chessboard.childNodes;
  const clickedSquareArr = [];

  fileNodeList.forEach((squareFile) => {
    const squaresNodeList = squareFile.childNodes;
    squaresNodeList.forEach((singleSquare) => {
      singleSquare.addEventListener("click", () => {
        // console.log("SQUARE CLICKED: ", singleSquare);

        checkCurrentHighlight();

        singleSquare.childNodes.forEach((squareGive) => {
          // ADDING HIGHLIGHT ONLY FOR SQUARE WITH PIECE
          if (squareGive.classList == "img-style") {
            singleSquare.classList.add("square-clicked");
          }
        });
      });

      function checkCurrentHighlight() {
        clickedSquareArr.push(singleSquare);

        for (let i = 0; i < clickedSquareArr.length; i++) {
          clickedSquareArr[i].classList.remove("square-clicked");
        }
      }
    });
  });
}

// STYLES -> CHESSBOARD.CSS (square-clicked)

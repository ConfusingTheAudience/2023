export const pieces = [
  {
    id: 0,
    piece: "rook",
    color: "black",
    pieceURL: "assets/pieces/black-rook.png",
  },
  {
    id: 1,
    piece: "knight",
    color: "black",
    pieceURL: "assets/pieces/black-knight.png",
  },
  {
    id: 2,
    piece: "bishop",
    color: "black",
    pieceURL: "assets/pieces/black-bishop.png",
  },
  {
    id: 3,
    piece: "queen",
    color: "black",
    pieceURL: "assets/pieces/black-queen.png",
  },
  {
    id: 4,
    piece: "king",
    color: "black",
    pieceURL: "assets/pieces/black-king.png",
  },
  {
    id: 5,
    piece: "pawn",
    color: "black",
    pieceURL: "assets/pieces/black-pawn.png",
  },
  {
    id: 6,
    piece: "rook",
    color: "white",
    pieceURL: "assets/pieces/white-rook.png",
  },
  {
    id: 7,
    piece: "knight",
    color: "white",
    pieceURL: "assets/pieces/white-knight.png",
  },
  {
    id: 8,
    piece: "bishop",
    color: "white",
    pieceURL: "assets/pieces/white-bishop.png",
  },
  {
    id: 9,
    piece: "queen",
    color: "white",
    pieceURL: "assets/pieces/white-queen.png",
  },
  {
    id: 10,
    piece: "king",
    color: "white",
    pieceURL: "assets/pieces/white-king.png",
  },
  {
    id: 11,
    piece: "pawn",
    color: "white",
    pieceURL: "assets/pieces/white-pawn.png",
  },
];

// SETUP PIECES ON CERTAIN SQUARES

export function renderPieces() {
  const sq = document.querySelectorAll(".square");

  sq.forEach((square) => {
    const pieceImg = document.createElement("img");
    pieceImg.classList.add("img-style");
    switch (square.id) {
      // BLACK BACKROW PIECES
      case "a8":
        pieceImg.setAttribute("src", pieces[0].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "b8":
        pieceImg.setAttribute("src", pieces[1].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "c8":
        pieceImg.setAttribute("src", pieces[2].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "d8":
        pieceImg.setAttribute("src", pieces[3].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "e8":
        pieceImg.setAttribute("src", pieces[4].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "f8":
        pieceImg.setAttribute("src", pieces[2].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "g8":
        pieceImg.setAttribute("src", pieces[1].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "h8":
        pieceImg.setAttribute("src", pieces[0].pieceURL);
        addedImgToSquare(pieceImg);
        break;

      // BLACK PAWN PIECES
      case "a7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "b7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "c7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "d7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "e7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "f7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "g7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "h7":
        pieceImg.setAttribute("src", pieces[5].pieceURL);
        addedImgToSquare(pieceImg);
        break;

      // WHITE BACKROW PIECES
      case "a1":
        pieceImg.setAttribute("src", pieces[6].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "b1":
        pieceImg.setAttribute("src", pieces[7].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "c1":
        pieceImg.setAttribute("src", pieces[8].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "d1":
        pieceImg.setAttribute("src", pieces[9].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "e1":
        pieceImg.setAttribute("src", pieces[10].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "f1":
        pieceImg.setAttribute("src", pieces[8].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "g1":
        pieceImg.setAttribute("src", pieces[7].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "h1":
        pieceImg.setAttribute("src", pieces[6].pieceURL);
        addedImgToSquare(pieceImg);
        break;

      // WHITE PAWN PIECES
      case "a2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "b2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "c2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "d2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "e2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "f2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "g2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
      case "h2":
        pieceImg.setAttribute("src", pieces[11].pieceURL);
        addedImgToSquare(pieceImg);
        break;
    }

    function addedImgToSquare(imgToAdd) {
      square.appendChild(imgToAdd);
    }
    
  });
}

// STYLES -> PIECES.CSS

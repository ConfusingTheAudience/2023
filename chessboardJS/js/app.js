// CHESSBOARD RENDER
import { renderBoard } from "./renderBoard.js";
import { renderPieces } from "./renderPieces.js";
import { renderSquareInfo } from "./renderSquareInfo.js";

renderBoard();
renderPieces();
renderSquareInfo();

// HIGHTLIGHT

import * as HighlightPiece from "./highlightMove.js";
HighlightPiece.highlight();

const board = document.querySelector(".board");
const hints = document.querySelector(".details-hint");
const resetBtn = document.querySelector(".reset-btn");
let points = 0;
// FETCH JSON
generateData();
function generateData() {
  // to clear previous board while reseting game
  board.innerHTML = "";
  const url = "words.json";
  fetch(url)
    .then((x) => x.json())
    .then((data) => gameStart(data));
}

function gameStart(data) {
  // generate random data from json
  const generateRandomData = Math.floor(Math.random() * data.length);

  // take index of random data and sign it to a variable
  pickRandomData = data[generateRandomData];

  // taking generated word and hint into html
  const wordArray = [...pickRandomData.word];
  
  for (let j = 0; j < wordArray.length; j++) {
    const boardBox = document.createElement("div");
    boardBox.classList.add("board-box");
    boardBox.innerHTML = `${wordArray[j]}`;
    board.append(boardBox);
  }
  hints.textContent = `Hint: ${pickRandomData.hint}`;
}

// addEventListener for whole page to let use click letters on keyboard
const body = document.querySelector("body");
body.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();

  const isLetter = key >= "a" && key <= "z";

  if (isLetter) {
    const guessBox = document.querySelectorAll(".board-box");
    guessBox.forEach((box) => {
      if (key == box.textContent) {
        box.classList.add("show");
      }
    });
  }
  const completedGuesses = document.querySelectorAll(".board .board-box.show").length;
  const allGuesses = document.querySelectorAll(".board .board-box").length;

  if (completedGuesses === allGuesses) {
    points++;
    setTimeout(() => {
      alert(`CONGRATULATIONS! YOU WON ${points} TIMES`);
    }, "500");
    generateData();
  }
});

resetBtn.addEventListener("click", ()=>{
  points = 0;
  generateData();
});

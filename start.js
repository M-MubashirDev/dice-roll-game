`use strict`;
const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const imgDice = document.querySelector(".img-dice");
const diceRoll = document.querySelector(".dice-role");
const hidden = document.querySelector(".hidden");
const playerno0 = document.querySelector(".playerno0");
const currentScore0 = document.querySelector(".current-sore0");
const currentScore1 = document.querySelector(".current-sore1");
// const playerno0 = document.querySelector(".playerno0");
const playerno1 = document.querySelector(".playerno1");
const holdGame = document.querySelector(".hold-game");
const newGame = document.querySelector(".new-game");
const winner = document.querySelector(".winner");
score1El.textContent = 0;
let addscore = 0;
let activePlayer = 0;
let holdvalue = [0, 0];
score0El.textContent = 0;
imgDice.classList.add("hidden");
let playing = true;
const switchplayer = function () {
  document.querySelector(`.current-sore${activePlayer} `).textContent = 0;
  addscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerno0.classList.toggle("active-color");
  playerno1.classList.toggle("active-color");
};

diceRoll.addEventListener("click", function () {
  if (playing) {
    const unknown = Math.trunc(Math.random() * 6) + 1;
    console.log(unknown);
    imgDice.classList.remove("hidden");
    imgDice.src = `dice-${unknown}.png`;
    if (unknown !== 1) {
      addscore += unknown;
      document.querySelector(`.current-sore${activePlayer} `).textContent =
        addscore;
    } else {
      switchplayer();
    }
  }
});

holdGame.addEventListener("click", function () {
  if (playing) {
    holdvalue[activePlayer] += addscore;
    console.log(holdvalue[activePlayer]);
    document.querySelector(`.hold-score-${activePlayer}`).textContent =
      holdvalue[activePlayer];

    if (holdvalue[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.playerno${activePlayer}`).style.backgroundColor =
        "#cdc9c9";
      imgDice.classList.add("hidden");
    } else {
      switchplayer();
    }
  }
});

newGame.addEventListener("click", function () {
  location.reload();
});

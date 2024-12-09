function play() {
  setHiddenById("home");
  setHiddenById("score");
  removeHiddenById("playground");

  playingGame();
}

// ============================ playground ====================================

function playingGame() {
  const live = setById("live");
  const liveText = (live.innerText = genarateRandomAlphabet());
  setBgById(liveText);
}

// ===============================  keyboard ======================================

function keyPress(event) {
  const key = event.key;
  const liveKey = getById("live").toLowerCase();

  // set condition
  if (key === liveKey) {
    const currentScore = getValueById("live-score");
    const update = currentScore + 1;
    setValueById("live-score", update);

    removeBgById(liveKey);
    playingGame();
  } else {
    const currentLife = getValueById("life");
    const update = currentLife - 1;
    setValueById("life", update);

    if (currentLife === 0) {
      gameOver();
    } 
  }
}

document.addEventListener("keyup", keyPress);

// ================================ game Over ========================
function gameOver() {
  setHiddenById("playground");
  removeHiddenById("score");

  const score = getById("final-score");
  score.innerText = score;
}
// Fix errors in the gameOver function
function gameOver() {
  setHiddenById("playground");
  removeHiddenById("score");

  const finalScore = getValueById("live-score");
  const scoreElement = setById("final-score");
  scoreElement.innerText = finalScore;
}

// Update keyPress function to handle game over correctly
function keyPress(event) {
  const key = event.key;
  const liveKey = getById("live").toLowerCase();

  if (key === liveKey) {
    const currentScore = getValueById("live-score");
    const update = currentScore + 1;
    setValueById("live-score", update);

    removeBgById(liveKey);
    playingGame();
  } else {
    const currentLife = getValueById("life");
    const update = currentLife - 1;
    setValueById("life", update);

    if (update === 0) {
      gameOver();
    } else {
      playingGame(); // Continue the game if life is not zero
    }
  }
}

// Remove the existing event listener and add it again to use the updated keyPress function
document.removeEventListener("keyup", keyPress);
document.addEventListener("keyup", keyPress);

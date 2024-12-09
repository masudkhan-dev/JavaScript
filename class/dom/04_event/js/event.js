// btn red
function btnRed() {
  document.body.style.backgroundColor = "red";
}

// btn blue
const btnBlue = document.getElementById("btn-blue");
btnBlue.onclick = BtnBlue;

function BtnBlue() {
  document.body.style.backgroundColor = "blue";
}

// btn yellow
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

const yellowBtn = document.getElementById("btn-yellow");
yellowBtn.addEventListener("click", makeYellow);

// btn pink
function makePink() {
  document.body.style.backgroundColor = "pink";
}

const pinkBtn = document.getElementById("btn-pink");
pinkBtn.addEventListener("click", makePink);

// btn green

const btnGreen = document.getElementById("btn-green");
btnGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// btn golden rod

document.getElementById("btn-goldenrod").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});

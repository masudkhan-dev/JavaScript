// add hidden class
function setHiddenById(_id) {
  const item = document.getElementById(_id);
  item.classList.add("hidden");
}

// remove hidden class
function removeHiddenById(_id) {
  const item = document.getElementById(_id);
  item.classList.remove("hidden");
}

// genarate random alphabet
function genarateRandomAlphabet() {
  const string = "abcdefghijklmnopqrstuvwxyz";
  const array = string.split("");

  const number = Math.random() * 25;
  const random = Math.round(number);

  const alphabet = array[random];
  return alphabet;
}

// get id
function getById(_id) {
  const item = document.getElementById(_id);
  const itemText = item.innerText;
  return itemText;
}

// add bg
function setBgById(_id) {
  const item = document.getElementById(_id);
  item.classList.add("bg-orange-400");
}

// remove bg
function removeBgById(_id) {
  const item = document.getElementById(_id);
  item.classList.remove("bg-orange-400");
}

// get id & Set value
function setById(_id) {
  const item = document.getElementById(_id);
  return item;
}

// score value calculaion
function getValueById(_id) {
  const item = setById(_id);
  const itemText = item.innerText;
  const value = parseInt(itemText);
  return value;
}

function setValueById(_id, value) {
  const item = setById(_id);
  item.innerText = value;
}

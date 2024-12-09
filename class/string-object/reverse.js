const sentence = "I am learning web dev";

let reverse = "";

for (const letter of sentence) {
  reverse = letter + reverse;
}

console.log(reverse);

// ==============================================

for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  reverse = letter + reverse;
}
console.log(reverse);

// shortcut

const reversed = sentence.split(" ").reverse().join(" ");
console.log(reversed);

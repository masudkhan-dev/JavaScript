const myScore = 81;
const friendScore = 50;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("Let's go for launch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("Good Luck for next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("You have unseend your friend message.");
  } else if (friendScore < 40) {
    console.log("You have been blocked, your friends.");
  }
} else {
  if (myScore < 80) {
    console.log("I am very sad");
  }
}

// =========== Ternary Oparator ==========

myScore > 80
  ? friendScore > 80
    ? console.log("lets go for the launch")
    : friendScore >= 60 && friendScore < 80
    ? console.log("good luck for the next time")
    : friendScore < 60 && friendScore >= 40
    ? console.log("you have been unseen your friend message")
    : console.log("You have been blocked your friend")
  : console.log("I am very sad");

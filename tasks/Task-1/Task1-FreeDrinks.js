const price = 1000;

if (price > 500) {
  console.log("You have got a coke for free.");
} else {
  console.log("You have a got coke for 30 tk only.");
}

// make this also with ternary operator:

price > 500
  ? console.log("Your got a coke for free.")
  : console.log("Your coke price is 30tk only");

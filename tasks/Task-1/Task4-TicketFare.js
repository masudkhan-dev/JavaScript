const age = 20;
const isStudents = true;

if (age < 10) {
  console.log("Free Ticket");
} else if (isStudents === true) {
  console.log("You got 50% discount");
} else if (age >= 60) {
  console.log("You got 15% discount");
} else {
  console.log("Ticket Price 800 tk");
}

// ================== Ternary Oparator =====================
age < 10
  ? console.log("Free Ticket")
  : isStudents
  ? console.log("You got 50% discount")
  : age >= 60
  ? console.log("You got 15% discount")
  : console.log("Ticket Price 800 tk");

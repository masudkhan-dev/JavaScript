const BMI = 20;

if (BMI < 18.5) {
  console.log("You are under weight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight");
} else {
  console.log("You are oboses");
}

// ============ MAKING WITH TERNARY OPARATIOR ==============

// const BMI = 20;

BMI < 18.5
  ? console.log("You are underweight")
  : BMI >= 18.5 && BMI <= 24.9
  ? console.log("You are normal")
  : BMI >= 25
  ? console.log("You are overweight")
  : console.log("You are obese");

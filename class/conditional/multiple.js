const salary = 25000;
const height = 57;
const isBCS = true;
const hasCar = true;

// && এটার মানে এবং এটা দিলে অবশ্যই ২ টা শর্ত পূরণ করতে হবে।

if (salary >= 20000 && height >= 57) {
  console.log("su-------patro");
} else {
  console.log("patro valo na");
}

//    ||    এটার মানে অথবা, এটা থাকলে যেকোনো একটা শর্ত পূরণ হলেই চলবে
if (salary > 24000 || height > 59) {
  console.log("eso baba kobul");
} else {
  console.log("vaag tui mokbul");
}

// অথবা কাজ করে এটা দিয়ে ||
if (salary >= 20000 || height >= 58 || isBCS == true) {
  console.log("parto valo");
} else {
  console.log("patro valo na, nesa kore");
}

// এবং কাজ করে এটা দিয়ে &&
if (salary >= 30000 && height >= 57 && isBCS == true) {
  console.log("chele valo");
} else {
  console.log("chele nesa kore");
}

// complex conditions
// salary এবং car থাকতেই হবে অথবা bcs হতেই হবে
if ((salary > 20000 && hasCar == true) || isBCS == true) {
  console.log("sonar chele");
} else {
  console.log("chele nesa kore");
}

// salary অথবা car যেকোনো একটা হলেই চলবে এবং bcs হওয়া যাবে না
if ((salary > 21000 || hasCar == true) && isBCS == false) {
  console.log("hajare akta chele");
} else {
  console.log("er theke kharap chele nai");
}

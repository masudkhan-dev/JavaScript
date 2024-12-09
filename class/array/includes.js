/**
 *    includes() এটি দ্বারা মূলত দেখা হয় value টি আদৌ array এর মধ্যে আছে কিনা?
 *
 *    থাকলে true
 *    না থাকলে false
 *
 *    এই true false কাজে লাগিয়ে if else এর মধ্যে condition তৈরি করতে পারি
 *
 **/

const friends = ["salam", "kalam", "khailam", "pailam", "gelam", "thaklam"];

console.log(friends.includes("kalam"));
console.log(friends.includes("thaprailam"));

// ========== includes() দিয়ে condition তৈরি  =============

if (friends.includes("khailam na")) {
  console.log("It's very good food");
} else {
  console.log("I am fasting");
}

// =========== ternary oparator ==========

friends.includes("khailam")
  ? console.log("it was very good food")
  : console.log("I am fasting");

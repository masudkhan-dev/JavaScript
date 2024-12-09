const jim = 65;
const kim = 75;
const tim = 95;

if (jim > kim && jim > tim) {
  console.log("jim is the biggest person");
} else if (kim > jim && jim > tim) {
  console.log("kim is the biggest person");
} else {
  console.log("tim is the boss");
}

// ------------------

console.log(Math.max(jim, tim, kim));

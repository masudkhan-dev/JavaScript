const disha = 95;
const salman = 59;

if (disha > salman) {
  console.log("disha will get strawberry");
} else {
  console.log("salman will get the straberry");
}

// ==================================================

function getMax(disha, salman) {
  if (disha > salman) {
    return disha;
  } else {
    return salman;
  }
}

const max = getMax(disha, salman);
console.log("the max number is:", max);

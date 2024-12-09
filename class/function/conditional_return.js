function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const result1 = isEven(5);
const result2 = isEven(10);

console.log(result1);
console.log(result2);

// ========== odd number =============

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(3));
console.log(isOdd(8));

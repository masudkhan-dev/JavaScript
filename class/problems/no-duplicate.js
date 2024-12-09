const biryaniKhor = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "babul",
  "abul",
  "cabul",
  "babul",
  "cabul",
];

//                  এটা params
function noDuplicate(i) {
  const unique = [];
  for (const item of i) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
//                          এটা value
const result = noDuplicate(biryaniKhor);
console.log(result);

/// ====================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 4, 1, 2, 3, 6, 9, 5, 1, 2, 5, 3, 6, 4, 5];

function nonDuplicate(params) {
  const single = [];

  for (const i of params) {
    if (single.includes(i) === false) {
      single.push(i);
    }
  }
  return single;
}

const finalResult = nonDuplicate(numbers);
console.log(finalResult);

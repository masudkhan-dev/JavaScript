const price = [20000, 30000, 40000, 50000, 60000, 80000, 15000, 28000, 13500];

function getMin(params) {
  let min = params[0];
  for (const i of params) {
    if (i < min) {
      min = i;
    }
  }
  return min
}

const cheepPrice = getMin(price);
console.log(cheepPrice);

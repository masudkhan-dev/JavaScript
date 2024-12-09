function evenNumber(numbers) {
  const evens = [];

  for (const i of numbers) {
    if (i % 2 === 0) {
      console.log("even number is: ", i);
      evens.push(i);
    }
  }
  return evens;
}

const numbers = [65, 32, 52, 12, 45, 98, 75, 94, 83];

const result = evenNumber(numbers);

console.log(result);

//

function jorNumber(num) {
  for (const heda of num) {
    if (heda % 2 === 0) {
      console.log("even number is:", heda);
    }
  }

  return heda;
}

const num = [54, 36, 52, 875, 7, 6, 4, 1, 32, 66];
jorNumber(num);

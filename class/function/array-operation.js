const number = [4, 6, 3, 8, 9, 4];

function sumOfNumbers(number) {
  let sum = 0;

  for (const numbers of number) {
    sum = sum + numbers;
  }

  console.log(sum);
}

const total = sumOfNumbers(number);



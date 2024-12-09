const numbers = [12, 25, 63, 75, 95, 42, 6, 3, 154, 652, 364];

//  reverse
console.log(numbers.reverse());

// another method to reverse

const reverse_number = [];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  reverse_number.unshift(num);
}

console.log(reverse_number);

// reverse side
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];

  console.log(num);
}

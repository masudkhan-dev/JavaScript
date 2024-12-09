// array number বের করতে  always for of loop use করতে হবে
// odd মানে বিজোড়

function oddAvg(number) {
  const odds = [];

  for (const numbers of number) {
    if (numbers % 2 === 1) {
      odds.push(numbers);
    }
  }
  console.log(odds);

  let sum = 0;
  for (const odd of odds) {
    sum = sum + odd;
  }

  const count = odds.length;
  const avg = sum / count;
  return avg;
}

const number = [54, 36, 21, 52, 34, 15, 75, 95, 85, 63, 11];
const avg = oddAvg(number);

console.log(avg);

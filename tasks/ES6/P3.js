const numbers = () => {
  const num = [3, 5, 4, 6, 3, 5, 7, 21];
  let sum = 0;

  for (const i of num) {
    const squre = i * i;
    sum += squre;
  }

  const avg = sum / num.length;
  return avg;
};

const result = numbers();
console.log(result);

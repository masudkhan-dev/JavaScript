const problem4 = () => {
  const num1 = [2, 3, 1, 4, 5];
  const num2 = [9, 7, 8, 6];

  const marge = [...num1, ...num2];

  const max = Math.max(...marge)

  return max;
};

const result = problem4();
console.log(result);

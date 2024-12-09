const height = [65, 66, 68, 72, 78, 60, 65, 86];

function getMaxHeight(params) {
  let max = params[0];
  for (const num of params) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const result = getMaxHeight(height);
console.log(result);

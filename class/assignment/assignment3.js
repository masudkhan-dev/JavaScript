function deleteInvalids(array) {
  const newArray = [];

  for (const i of array) {
    if (i === "number") {
      newArray.push(i);
    } else {
        return "Invalid Number";
    }
  }

  return newArray;
}
const fullArray = [2, NaN, 2, 3, 6, 5, 4, undefined, null];

const result = deleteInvalids(fullArray);
console.log(result);

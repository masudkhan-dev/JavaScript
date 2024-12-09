function multipy(num1, num2) {
  if (typeof num1 !== "number" && typeof num1 !== "number") {
    return "Please insert a number";
  }

  const multipy = num1 * num2;
  return multipy;
}

const result = multipy(4, "five");
console.log(result);

// ----------------------------------------------------

function fullName(first, secound) {
  if (typeof first !== "string" && typeof secound !== 'string') {
    return "Please provide a string";
  }
  const full = first + " " + secound;
  return full;
}

const full = fullName('CR', 7);
console.log(full)

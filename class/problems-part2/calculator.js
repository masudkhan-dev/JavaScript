function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  const result = num1 - num2;
  return result;
}

function multipy(num1, num2) {
  const result = num1 * num2;
  return result;
}

function devide(num1, num2) {
  const result = num1 / num2;
  return result;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multipy") {
    const result = multipy(a, b);
    return result;
  } else if (operation === "devide") {
    const result = devide(a, b);
    return result;
  } else {
    console.log("Please work for + - * /");
  }
}

const result = calculator(4, 6, "multipy");
console.log(result);

// arguments is array like object

function sum(a, b, c, d) {
  // access any perameter like an array
  console.log(arguments[3]);

  // convert arguments to an array
  const arr = [...arguments];
  console.log(arr);

  return a + b + c + d;
}

console.log(sum(31, 45, 63, 21, 85));

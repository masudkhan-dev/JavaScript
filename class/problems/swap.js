let a = 5;
let b = 7;

console.log(a, b);

// -------------------------------

const temp = a;
a = b;
b = temp;

console.log(a, b);

// --------------------------

let x = 9;
let y = 6;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);

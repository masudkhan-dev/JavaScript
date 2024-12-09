/*

function add(a, b) {
  return a + b;
}

এই function এর update version হল arrow funtion 

const arrow = () => 


*/
const add = (a, b) => a + b;

const sum = add(3, 5);
console.log("the sum is", sum);

// ======== you can use arraw function with an object ===========

// single perameter
const getAge = (person) => person.age;

const student = {
  name: "kuddus",
  age: 68,
};

const age = getAge(student);
console.log(age);

// ============ you can also use arrow function with an array =====================

const getThird = (number) => number[2];

const numbers = [5, 6, 3, 5, 7, 5, 9, 6, 4, 5, 3];
const third = getThird(numbers);
console.log(third);

// no perameter with array function
const getPI = () => Math.PI.toFixed(4);

const pi = getPI();
console.log(pi);

// large arrow function

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
};

const math = doMath(3, 7, 6);
console.log(math);

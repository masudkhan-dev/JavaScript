const number = [9, 5, 6, 3, 1, 8, 2, 7];

const num = number.sort();

console.log(num);

// ========= sort()  string =======

const person = ["rakib", "nokib", "fakib", "sakib", "dakib"];

const sortPerson = person.sort();
console.log(sortPerson);

// =======================

const num2 = [
  23, 6, 8, 5, 6, 7, 14, 15, 63, 25, 45, 46, 41, 85, 75, 6, 5, 35, 65, 35,
];

const num2_asc = num2.sort(function (a, b) {
  return a - b;
});

console.log(num2_asc);

const num2_dsc = num2.sort(function (a, b) {
  return b - a;
});

console.log(num2_dsc);

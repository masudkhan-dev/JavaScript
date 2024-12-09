const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 1650000 },
];

// map()
const name = products.map((m) => m.name);
console.log(name);

const price = products.map((m) => m.price);
console.log(price);

// forEach
products.forEach((p) => console.log(p.id));

// filter()
const expensive = products.filter((p) => p.price > 50000);
console.log(expensive);

// find
const affortable = products.find((p) => p.price < 50000);
console.log(affortable);

// reduce
const total = products.reduce((a, b) => a + b.price, 0);
console.log(total);

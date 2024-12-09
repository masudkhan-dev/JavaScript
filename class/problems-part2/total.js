const product = [
  { name: "shampoo", price: 300 },
  { name: "shoap", price: 90 },
  { name: "chiruni", price: 30 },
  { name: "shirt", price: 700 },
  { name: "pant", price: 700 },
  { name: "shoe", price: 3000 },
];

function getShopping(product) {
  let total = 0;
  for (const i of product) {
    total = total + i.price;
  }
  return total;
}

const result = getShopping(product);
console.log(result);

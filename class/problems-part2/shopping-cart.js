const product = [
  { name: "shampoo", price: 300, quantity: 5 },
  { name: "shoap", price: 90, quantity: 3 },
  { name: "chiruni", price: 30, quantity: 2 },
  { name: "shirt", price: 700, quantity: 4 },
  { name: "pant", price: 700, quantity: 6 },
  { name: "shoe", price: 3000, quantity: 1 },
];

function cartTotal(params) {
  let total = 0;
  for (const i of params) {
    const eachItemCost = i.price * i.quantity;

    total = total + eachItemCost;
  }
  return total;
}

const shoppingCost = cartTotal(product);
console.log(shoppingCost);

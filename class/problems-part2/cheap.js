const mobiles = [
  { name: "Samsung", price: 98000, camera: "108mp", color: "black" },
  { name: "Xiaomi", price: 12000, camera: "10mp", color: "blue" },
  { name: "Realme", price: 28000, camera: "16mp", color: "white" },
  { name: "Oppo", price: 32000, camera: "108mp", color: "gold" },
  { name: "iPhone", price: 198000, camera: "12mp", color: "rose" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (const i of phones) {
    if (i.price < min.price) {
      min = i;
    }
  }
  return min;
}

const cheap = getCheapestPhone(mobiles);
console.log(cheap);

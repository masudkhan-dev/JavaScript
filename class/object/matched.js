const products = [
  { name: "Samsung Mobile", price: "110000", color: "black" },
  { name: "xiaomi Mobile", price: "110000", color: "red" },
  { name: "realme Mobile", price: "110000", color: "blue" },
  { name: "oppo Mobile", price: "110000", color: "pink" },
  { name: "vivo Mobile", price: "110000", color: "white" },
  { name: "iPhone ", price: "110000", color: "green" },
  { name: "lenovo laptop", price: "110000", color: "yellow" },
  { name: "xiaomi laptop", price: "110000", color: "brown" },
  { name: "hp laptop", price: "19000", color: "black" },
  { name: "dell laptop", price: "12000", color: "rose" },
  { name: "samsung laptop", price: "91000", color: "silver" },
];

function matched(products, search) {
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      console.log(product);
    }
  }
}

const result = matched(products, "phone");
console.log(result);

function layerDiscount(params) {
  if (params <= 100) {
    const total = params * 100;
    return total;
  } else if (params <= 200) {
    const first = params * 100;
    const secound = params * 90;
    const total = first + secound;
    return total;
  } else {
    const first = params * 100;
    const secound = params * 90;
    const third = params * 70;
    const total = first + secound + third;
    return total;
  }
}

const result = layerDiscount(201);
console.log(result);

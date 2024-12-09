let price = 5000;
const isLeader = true;

price =
  isLeader === true
    ? price > 1000
      ? price - (price * 10) / 100
      : price > 2000
      ? price - (price * 20) / 100
      : 0
    : (price * 105) / 100;

console.log(price);

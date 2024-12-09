// বয়স
const age = 52;
// মোট দাম
const price = 500;

// যদি ১২ বছরের কম হয় তবে,
if (age <= 12) {
  // তাদের খাবার ফ্রি
  console.log("You can eat food for free");
}
// যদি ৪০ বছরের সমান অথবা বেশি হয় তবে,
else if (age >= 40) {
  // ১০% discount পাবে
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
// যদি ৫০ বছরের সমান অথবা বেশি হয় তবে,
else if (age >= 50) {
  // তাঁরা ২৫% discount পাবে
  const discount = (price * 25) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
// আবার যদি ৬০ বছরের সমান অথবা বেশি হয় তবে,
else if (age >= 60) {
  // দামের ওপর ৫০% Discount
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
// তাছাড়া বাকিদের সম্পূর্ণ টাকা দিতে হবে
else {
  console.log(price);
}

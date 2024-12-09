// এত টাকার বিল হইছে
const price = 5000;

// যদি ২০০০ টাকার বেশি অথবা সমান ক্রয় করা হয় তবে,
if (price >= 6000) {
  //  ( ৫০০০ টাকা)  দামের ওপর ১০% ডিসকাউন্ত
  const discount = (price * 10) / 100;

  // কত টাকা পরিশোধ করতে হবে
  const payAmount = price - discount;
  console.log(payAmount);
}
// আবার যদি ১০০০ টাকার বেশি ক্রয় করে তবে,
else if (price > 1000) {
  // মোট দামের অপর ৫% discount
  const discount = (price * 5) / 100;

  // কত টাকা পরিশোধ করতে হবে
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}

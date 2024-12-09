// সরর্বনিম্ন সংখ্যা
const min = Math.min(
  1,
  2,
  5,
  3,
  6,
  74,
  6,
  9,
  6,
  5,
  4,
  21,
  3,
  6,
  4,
  2,
  96,
  78,
  6,
  2,
  4,
  6,
  3,
  1
);
console.log(min);

// সরবোচ্চ সংখ্যা
const max = Math.max(
  1,
  2,
  5,
  3,
  6,
  74,
  6,
  9,
  6,
  5,
  4,
  21,
  3,
  6,
  4,
  2,
  96,
  78,
  6,
  2,
  4,
  6,
  3,
  1
);
console.log(max);

// পাই এর মান পাওয়া যাবে
const pi = Math.PI;
console.log(pi);

//  দশমিক সংখ্যা থেকে পুর্ন সংখ্যা রুপান্তর
console.log(Math.round(2.65));

// নেগেটিভ মান পসিটিভ করে দিবে
console.log(Math.abs(8 - 9));

// ভগ্নাংশর শুধু পূর্ণ সংখ্যা  নিবে  কোন বাড়াবে না
console.log(Math.floor(6.999995));

// ভগ্নাংশের সাথে ১ যোগ করে বাড়িয়ে  দিবে
console.log(Math.ceil(7.0000012));

// ০ থেকে ১ এর আগ পর্যন্ত যেকোন সংখ্যা  দিবে
console.log(Math.random());

// 0 থেকে 10 এর আগ পর্যন্ত যেকোন সংখ্যা  দিবে
console.log(Math.random() * 10);

console.log(Math.random() * 100000000000000);


// 0 থেকে 100 এর আগ পর্যন্ত যেকোন পূর্ণ সংখ্যা  দিবে
const rand = Math.round(Math.random()*100);
console.log(rand)
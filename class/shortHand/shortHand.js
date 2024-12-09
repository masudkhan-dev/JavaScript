/**
 * অপারেশন ছোট করে লিখতে চাইলে এটা ব্যাবহার করা হয়
 * যেমন ঃ
 *  +=, -=, *=, /=, %=
 */

var price = 50;
// price = price + 10; // এটা যোগ করার ফুল ভার্সন
price += 10; // এটা শর্ট ভার্সন কিন্তু কাজ একই
console.log(price);

var biyog = 20;
// biyog = biyog - 5;  // এটা বিয়োগ করার ফুল ভার্সন
biyog -= 5; // এটা শর্ট ভার্সন কিন্তু কাজ একই
console.log(biyog);

var gun = 30;
// gun = gun * 2; // এটা গুন করার ফুল ভার্সন
gun *= 2; // শর্ট
console.log(gun);

var vag = 40;
// vag = vag / 2; // এটা ভাগ করার ফুল ভার্সন
vag /= 2; // শর্ট
console.log(vag);

var vagSes = 50;
// vagSes = vagSes % 3; // এটা ভাগশেষ বের করার ফুল ভার্সন
vagSes %= 3; // শর্ট
console.log(vagSes);

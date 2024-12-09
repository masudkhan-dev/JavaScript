/**
 *        -------------   TERNARY OPARATIOR    ---------------
 *
 *  এর ৩ টি অংশ
 *
 *               শর্ত ? সত্য হইলে রেজাল্ট  : মিথ্যা হইলে রেজাল্ট
 *
 *            ? এটাকে বলে if
 *            : এটাকে বলে else
 */

const age = 12;

age > 18 ? console.log("You Can Vote") : console.log("You are child");

// -------------------------------------------------

let price1 = 500;
let price2 = 600;
// normal code
const isLeader = false;

if (isLeader === true) {
  price1 = 0;
} else {
  price1 = price1 + 100;
}
console.log(price1);

// ternary code
price2 = isLeader === true ? 0 : price2 + 100;

console.log(price2);

// ------------------------------------------------------

let dam = 7000;
const isNeta = true;

if (isNeta === true) {
  if (dam > 1000) {
    dam = dam / 2;
  } else {
    dam = 0;
  }
} else {
  dam = dam + 100;
}
console.log(dam);

// ---------------------
let mullo = 600;
const isKheta = true;

isKheta === true ? (mullo > 1000 ? mullo / 2 : 0) : mullo + 100;

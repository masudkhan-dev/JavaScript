/*
     Array.isArray() দ্বারা চেক করা হয় variable টি আদৌ array কিনা
 
         array হলে true
         array না হলে false

    array হইতে হলে অবশ্যই [] এটা থাকতে হবে 
    তাঁর মধ্যে মান থাকুক বা না থাকুক [] এটা থাকতেই হবে

 */

const friends = ["salam", "kalam", "khailam", "pailam", "gelam", "thaklam"];
const age = [];

const food = "roso golla";
const marks = 66;

console.log(Array.isArray(friends));
console.log(Array.isArray(age));

console.log(Array.isArray(food));
console.log(Array.isArray(marks));

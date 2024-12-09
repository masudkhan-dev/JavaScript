/*
        map() loop করে মান return করে দেয় 

*/


const items = [2, 3, 6, 4, 5];

const i = items.map((n) => n * 2);
console.log(i);

// =================================

const prodcuts = ["apple", "orange", "banana", "goava", "mango"];

const p = prodcuts.map((i) => i.length);
console.log(p);

const a = prodcuts.map((b) => b);
console.log(a);

const fistLetter = prodcuts.map((letter) => letter[0]);
console.log(fistLetter);

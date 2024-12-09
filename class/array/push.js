/**
 *
 * array এর মান আপডেট বা আরও যোগ করতে push() ব্যাবহার করা হয়
 *
 * এটি সাধারণত শেষে যোগ হয়
 *
 *
 */

const marks = [61, 45, 75, 85, 95, 34];

console.log(marks);

// মানের শেষে নতুন একটা ভালু অ্যাড করা হয়
marks.push(66);

console.log(marks);

// ====================== ==================

// ফাকা array এর মধ্যেও মান দেয়া যায়

const age = [];

// এভাবেও আপডেট করা যায়
age.push(54, 66, 85, 77);

console.log(age);

// ================ =============== ===============
// আবার  সংখ্যা বাদে string বা লেখা ও দেওয়া যায়

const friends = ["asif", "masud", "sourov"];

friends.push("hasan", "sagor");

console.log(friends);

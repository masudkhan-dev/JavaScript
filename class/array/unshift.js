//      array এর মান আপডেট বা আরও যোগ করতে unshift() ব্যাবহার করা হয়
//      এটি সাধারণত শুরু থেকে যোগ হয়
//      push() এর খালাতো ভাই

const marks = [61, 45, 75, 85, 95, 34];

console.log(marks);

// মানের শুরুতে নতুন একটা ভালু অ্যাড করা হয়
marks.unshift(66);

console.log(marks);

// ====================== ==================

// ফাকা array এর মধ্যেও মান দেয়া যায়

const age = [];

// এভাবেও আপডেট করা যায়
age.unshift(54, 66, 85, 77);

console.log(age);

// ================ =============== ===============
// আবার  সংখ্যা বাদে string বা লেখা ও দেওয়া যায়

const friends = ["asif", "masud", "sourov"];

friends.unshift("hasan", "sagor");

console.log(friends);

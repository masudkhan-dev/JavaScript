// pop() এটা দ্বারা কোন array কে শেষ থেকে বের করে দেওয়া হয়

const names = ["salam", "kalam", "khailam", "pailam", "gelam", "thaklam"];

console.log(names);

// pop() শুধু মাত্র এটা ব্যাবহারে array এর শেষ আইটেম টা বের করে বা বাদ দেওয়া হয়
names.pop();

console.log(names);

// যদি আবারো pop() করি তাহলে শেষ থেকে আরেকটা বাদ যাবে
names.pop();

console.log(names);

// চাইলে এই বের করে দেওয়ার ব্যাপারটা একটা variable এর মধ্যেও রাখতে পারি।

const out1 = names.pop();
const out2 = names.pop();

console.log(names);

// আবার চাইলে pop() করে বের করে দেওয়া item দেখতেও পারি।

console.log(out1, out2);

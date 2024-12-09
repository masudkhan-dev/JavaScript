/*
        variable.slice()

        slice() দ্বারা কোন array এর আইটেম কেটে উপস্থাপন করা হয় 

        slice(3,7) বলতে array এর ৩ নাম্বার index থেকে শুরু করে
         ৭ নাম্বার index এর আগ পর্যন্ত মানে ৬ নাম্বার পর্যন্ত আইটেম কেটে দেখান হয়

*/

const friends = ["salam", "kalam", "khailam", "pailam", "gelam", "thaklam"];

console.log(friends);

const result = friends.slice(2, 4);

console.log(result);

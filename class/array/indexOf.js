/**
 *     indexOf() দ্বারা বোঝায় সেই মানের index নাম্বার কত?
 *      আমরা জানি array এর index নাম্বার ০ থেকে শুরু হয়
 *      সেই ০ হিসেবে চাওয়া মানের index নাম্বার কত?
 */

const friends = ["salam", "kalam", "khailam", "pailam", "gelam", "thaklam"];

console.log(friends.indexOf("thaklam"));

// আর হ্যাঁ চাইলে কিন্তু সবগুলোতেই variable use করেও কাজ করতে পারি
const result = friends.indexOf("gelam");

console.log(result);

// আবার কোন মান না থাকলেও index চেক করতে পারি
// মান না থাকলে ঋণাত্মক দেখাবে, ঋণাত্মক মানে সেই মান আদৌ নাই

console.log(friends.indexOf("tometo"));

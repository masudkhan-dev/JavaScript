/*
        
        1. toUpperCase()
            লেখা বড় হাতের করার জন্য ব্যাবহার হয় 

        2. toLowerCase()
            লেখা ছোট হাতের করার জন্য ব্যাবহার হয় 

        3. trim()
            sting এর সামনে এবং পিছনে যদি কোন space পড়ে তবে এটি দিয়ে সেগুলো রিমুভ করা হয় 
            
*/

const subject = "Accounting";
const book = "accounting";

// value সমান নয়
subject === book
  ? console.log("Poira fatai falamu")
  : console.log("boisa boisa pata ultai");

// ২ টা ছোট হাতের করে দিলে তবেই ভালু সমান হবে
subject.toLowerCase() === book.toLowerCase()
  ? console.log("poira fada halamu")
  : console.log("boisa boisa pata ultai");

// ২ টা বড় হাতের করে দিলে তবেই ভালু সমান হবে
subject.toUpperCase() === book.toUpperCase()
  ? console.log("poira fada halamu")
  : console.log("boisa boisa pata ultai");

// ============= ======================

const water = "water";
const pani = "water        ";

// value সমান নয়
water === pani
  ? console.log("panir opor nam jibon")
  : console.log("sumudre onek pani khaite pari na");

// value সমান
water.trim() === pani.trim()
  ? console.log("panir opor nam jibon")
  : console.log("sumudre onek pani khaite pari na");

if (water.trim() === pani.trim()) {
  console.log("panir opor nam jibon");
} else {
  console.log("sumudre onek pani khaite pari na");
}

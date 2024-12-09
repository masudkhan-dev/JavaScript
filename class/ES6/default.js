/* 
    আপনি চাইলে default মান সেট করতে পারেন
    যখন কোন মান পাবে না তখন default মান ধরে কাজ করবে 

    এখানে 0 default মান হিসেবে কাজ করবে 

*/
function add(a = 0, b = 0) {
  const result = a + b;
  return result;
}

const sum = add(4, 6);
console.log(sum);

// =======================================

function fullName(first, last = "") {
  const full = first + last;
  return full;
}

const name = fullName("mofij", " ");
console.log(name);

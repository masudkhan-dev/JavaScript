const max = Math.max(5, 4, 6, 3, 5, 8, 9, 6, 5, 32);
console.log(max);

// =================
/*
        ... দিলে array এর মধ্যে থেকে মান বের করে দেয় 
        ... না দিলে শুধু array দেয়, মান দেয় না 


*/

const array = [5, 9, 74, 46, 6, 3, 2, 56];
const maxArray = Math.max(...array);
console.log(maxArray);

// ------------------------------------------------------------

const friends = [3, 1, 5, 4, 2, 6];
const bondu = friends;
const dosto = [...friends];
const dosto2 = [...friends, 99];

friends.push(66);

console.log(friends);
console.log(dosto);
console.log(dosto2);

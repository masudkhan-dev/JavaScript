/*
    filter()
    দিয়ে array loop করে condition apply করে বাছাই করা  যায় 
    retun array []


*/

const numbers = [52, 36, 41, 23, 65, 12, 95, 36, 75, 62, 75];

// তারাই সিলেক্ট হবে যারা ৭০ এর ওপরে
const selected = numbers.filter((p) => p > 70);
console.log(selected);

// বিজোড় সংখ্যা সিলেক্ট হবে
const select = numbers.filter((i) => i % 2 === 1);
console.log(select);

// জোড় সংখ্যা সিলেক্ট হবে
const selec = numbers.filter((i) => i % 2 === 0);
console.log(selec);

// =========== apply in strings ============
const friends = [
  "tom",
  "jerry",
  "oggy",
  "gopal bhar",
  "montri mosai",
  "rani",
  "bota",
  "ghota",
];

const oddFriend = friends.filter((f) => f.length % 2 === 0);
console.log(oddFriend);

//
const evenFriend = friends.filter((e) => e.length % 2 === 1);
console.log(evenFriend);

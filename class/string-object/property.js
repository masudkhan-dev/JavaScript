const person = {
  name: "The Professor",
  age: 24,
  professon: "thip",
  salary: 25000,
  isMarried: false,
  "fav places": ["bandor ban", "cox bazar", "ranga mati"],
};

// dot notation
console.log(person.age);

//  একই কাজ variable দিয়েও করা যায়
const income = person.salary;
console.log(income);

// আবার array দিয়েও করা যায়
const boyos = person["age"];
console.log(boyos);

// =========

console.log(person["fav places"]);

const actor = {
  name: "shah rukh khan",
  age: 66,
  phone: "01685965756",
};

// object property name = object name
const { phone } = actor;
console.log(phone);

//  আপনি  acess করতে পারবেন সব  object এর  property এক লাইনে এবং সেটা আলাদা আলদা জায়গায়  use করতে পারবেন
const { name, age } = actor;

console.log(name);
console.log(age);

console.log("---------------------------");
// আপনি চাইলে obj property এর নাম পরিবর্তন করতে পারবেন

const naika = {
  nam: "sunny leone",
  boyos: 69,
  number: "01965756632",
};

// boyos = bochor
const { boyos: bochor, number, nam } = naika;

console.log(bochor);

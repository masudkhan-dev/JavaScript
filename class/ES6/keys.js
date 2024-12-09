const glass = {
  name: "glass",
  color: "golden",
  price: 10,
  isClean: true,
};

// acess the object property
const keys = Object.keys(glass);
console.log(keys);

// acess the object property value
const values = Object.values(glass);
console.log(values);

console.log("-----------------------------------------");

// acess the full array include array
const entries = Object.entries(glass);
console.log(entries);

// delete the object property with value
delete glass.isClean;
console.log(glass);

// you can freeze object
// after that can not happend with this object (not delete, not add, not change)
Object.freeze(glass);
delete glass.color;
glass.heda = 'kire hala'
console.log(glass);

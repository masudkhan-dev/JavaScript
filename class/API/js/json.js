const actor = {
  name: "Tom",
  address: {
    street: "kochu khet vuter goli",
    city: "United States of Sirajganj",
    Country: "Bangladesh",
  },
  product: ["Laptop", "Mobile", "Tablet"],
  isFree: true,
  isNew: false,
};

// you can convert this obj in string 
// JSON.stringty

const jsonString = JSON.stringify(actor);
console.log(jsonString)

// you can convert string to parse intizer

const jsonInt = JSON.parse(jsonString)
console.log(jsonInt)
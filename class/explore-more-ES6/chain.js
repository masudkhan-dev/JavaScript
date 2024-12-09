const data = [
  {
    id: 1,
    name: "masud",
    address: "kochu khet",
  },
];

console.log(data[0].address);

// =====================

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenevo laptop", price: 65000 },
    { id: 2, name: "macbook", price: 165000 },
    { id: 3, name: "hp laptop", price: 50000 },
  ],
};

console.log(products.data[1].name);

// ==============================

const user = {
  id: 2001,
  name: "abul",
  address: {
    street: {
      first: "54/1 uttar side",
      secound: "poribag er goli",
      third: "no dorai",
    },
    city: "dhaka",
  },
};

console.log(user.address.street.secound);

// ======================

const user2 = {
  id: 2002,
  name: "pori bibir majar",
  address: {
    city: "chittagong",
    county: "Bangladesh",
  },
};

console.log(user2.address.street?.secound);

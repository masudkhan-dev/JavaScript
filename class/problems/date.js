// আজকের তারিখ toLocaleString('en-GB') এভাবে ফরম্যাট করে দেখা যায়
const today = new Date();
console.log(today.toLocaleString("en-GB"));

// =============
const date = new Date("2062-10-29");
console.log(date.getMonth());
console.log(date.getDay());

const specifiDate = new Date(2091, 0, 26);
console.log(specifiDate);

specifiDate.setMonth(10);
console.log(specifiDate.toLocaleString("en-GB"));

// ১২ ইঞ্চিতে ১ ফুট তাই ১২ দিয়ে ভাগ করা হয়েছে

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const totalHeight = inchToFeet(75);
console.log(totalHeight);

// আবার

function inchToFeet2(inch) {
  const feet = inch / 12;
  const feetNumber = parseInt(feet);
  const inchStr = inch % 12;
  const result = feetNumber + " feet " + inchStr + " inch";
  return result;
}

const height = inchToFeet2(95);
console.log(height);

// miles to km converter

function milesToKm(miles) {
  const kilo = miles * 1.60934;
  return kilo;
}

const result = milesToKm(655222);
console.log(result + " km");

// km to miles
function kmToMiles(km) {
  const miles = km * 0.621371;
  return miles;
}
const result2 = kmToMiles(75);
console.log(result2 + " miles");

// kg to gram
function kgToGram(gram) {
  const kg = gram * 1000;
  return kg;
}

const kg = kgToGram(95);
console.log(kg + " kg");

//gram to kg

function gramToKg(kg) {
  const gram = kg * 0.001;
  return gram;
}
const gram = gramToKg(76);
console.log(gram + " gram");

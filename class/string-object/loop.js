const mobile = {
  brand: "realme",
  price: "28000",
  display: "super amoled",
  color: "blue",
  origin: "china",
};

for (const i in mobile) {
  console.log(i);

  console.log(mobile[i]);
}


const keys = Object.keys(mobile)
console.log(keys)


// ===============================

for(const key of keys){
    console.log(key, mobile[key])
}
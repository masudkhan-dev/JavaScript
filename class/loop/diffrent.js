// even number

for (let i = 0; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// another

//              !== সমান নয়

for (let a = 0; a < 20; a++) {
  if (a % 2 !== 1) {
    console.log(a);
  }
}

// odd number

for (let b = 0; b < 30; b++) {
  if (b % 2 === 1) {
    console.log(b);
  }
}

// another
for (let c = 0; c < 30; c++) {
  if (c % 2 !== 0) {
    console.log(c);
  }
}

// ৫ দিয়ে বিভাজ্য সংখ্যা

for (let d = 0; d < 50; d++) {
  if (d % 5 === 0) {
    console.log(d);
  }
}

// 3 দিয়ে বিভাজ্য সংখ্যা

for (let e = 0; e < 60; e++) {
  if (e % 3 === 0) {
    console.log(e);
  }
}

// 3  অথবা 5 দিয়ে বিভাজ্য সংখ্যা

for (let f = 0; f < 80; f++) {
  if (f % 3 === 0 || f % 5 === 0) {
    console.log(f);
  }
}

// 3 এবং 5 দিয়ে বিভাজ্য সংখ্যা

for (let g = 0; g < 80; g++) {
  if (g % 3 === 0 && g % 5 === 0) {
    console.log(g);
  }
}

// ১ থেকে ২০ পর্যন্ত সংখ্যা গুলোর মধ্যে যেগুলো ৩ দিয়ে ভাগ করা যায় সেগুলোর যোগফল নির্ণয়

let total = 0;
for (let x = 1; x < 20; x++) {
  if (x % 5 === 0) {
    console.log(x);
  }
  total += x;
  console.log("sum is:", total);
}

console.log("total amount:", total);

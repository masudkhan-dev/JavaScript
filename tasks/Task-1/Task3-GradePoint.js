const result = 40;

// রেজাল্ট 90 - 100 এর সমান বা এর মধ্যে থাকলে A দেখাবে।
if (result >= 90 && result <= 100) {
  console.log("A");
}
// রেজাল্ট 80 - 89 এর সমান বা এর মধ্যে থাকলে B দেখাবে।
else if (result >= 80 && result <= 89) {
  console.log("B");
}
// রেজাল্ট 70 - 79 এর সমান বা এর মধ্যে থাকলে C দেখাবে।
else if (result >= 70 && result <= 79) {
  console.log("C");
}
// রেজাল্ট 60 - 69 এর সমান বা এর মধ্যে থাকলে D দেখাবে।
else if (result >= 60 && result <= 69) {
  console.log("D");
}
// রেজাল্ট 50 - 59 এর সমান বা এর মধ্যে থাকলে E দেখাবে।
else if (result >= 50 && result <= 59) {
  console.log("E");
}
// otherwise
else {
  console.log("F");
}

// ========== Tarnary Oparatior ============

result >= 90 && result <= 100
  ? console.log("A")
  : result >= 80 && result <= 89
  ? console.log("B")
  : result >= 70 && result <= 79
  ? console.log("C")
  : result >= 60 && result <= 69
  ? console.log("D")
  : result >= 50 && result <= 59
  ? console.log("E")
  : console.log("F");

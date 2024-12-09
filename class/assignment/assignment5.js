function monthlySavings(payment, livingCost) {
  let totalTax = 0;
  let income = 0;

  for (const i of payment) {
    if (i >= 3000) {
      const tax = (i * 20) / 100;

      totalTax += tax;
      income += i;
    } else {
      income += i;
    }
  }

  const totalCost = livingCost + totalTax;
  const savings = income - totalCost;

  if (Array.isArray(payment) === false && livingCost !== "number") {
    return "invalid input";
  } else if (income < totalCost) {
    return "earn more";
  } else {
    return savings;
  }
}
fsadfdssdfdfsadafadfs;

const payment = [6000, 2000, 1000, 3000, 5000, 4000];
const result = monthlySavings(payment, 10000);
console.log(result);

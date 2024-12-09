var num1 = 10;
var num2 = 10.5;

var str1 = "20";
var str2 = "20.5";

// w - 1
var total1 = num1 + num2;
console.log(total1);

// w - 2
var total2 = num1 + str2;
console.log(total2);

// w -3
var cStr1 = parseInt(str1);
var total3 = cStr1 + num1;
console.log(total3);

// w - 4
var cStr2 = parseFloat(str2);
var total4 = cStr2 + num1;
console.log(total4);

// w - 5
var cNum1 = parseInt(num1);
var total5 = cNum1 + cStr2;

console.log(total5);

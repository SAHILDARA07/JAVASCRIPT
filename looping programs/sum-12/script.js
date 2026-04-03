// count digit in a number
  let num = 45678;
let count = 0;

if (num === 0) {
  count = 1;
} else {
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
}

console.log("Total Digits =", count);

let num1 = 45678;
let count1 = 0;

do {
  count1++;
  num1 = Math.floor(num1 / 10);
} while (num1 > 0);

console.log("Total Digits =", count1);


let num2 = 45678;
let count2 = 0;

for (; num2 > 0; num2 = Math.floor(num2 / 10)) {
  count2++;
}

console.log("Total Digits =", count2);
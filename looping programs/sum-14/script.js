let num = 121;
let temp = num;
let reverse = 0;

while (temp > 0) {
  let digit = temp % 10;
  reverse = reverse * 10 + digit;
  temp = Math.floor(temp / 10);
}

if (reverse === num) {
  console.log("Palindrome Number");
} else {
  console.log("Not a Palindrome Number");
}



let num1 = 121;
let temp1 = num1;
let reverse1 = 0;

do {
  let digit = temp1 % 10;
  reverse1 = reverse1 * 10 + digit;
  temp1 = Math.floor(temp1 / 10);
} while (temp > 0);

if (reverse === num) {
  console.log("Palindrome Number");
} else {
  console.log("Not a Palindrome Number");
}


let num2 = 121;
let reverse2 = 0;

for (let temp = num2; temp > 0; temp = Math.floor(temp / 10)) {
  let digit = temp % 10;
  reverse = reverse * 10 + digit;
}

if (reverse === num) {
  console.log("Palindrome Number");
} else {
  console.log("Not a Palindrome Number");
}
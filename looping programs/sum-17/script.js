
// magic number
let num = 17;

while (num > 9) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  num = sum;
}

if (num === 1) {
  console.log("Magic Number");
} else {
  console.log("Not a Magic Number");
}

for (let i = 1; i <= 10; i++) {
  let sum = 0;
  let temp = i;

    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    if (sum === 1) {
        console.log(i + " is a Magic Number");
    }else {
        console.log(i + " is Not a Magic Number");
    }
}

do{
    let sum1 = 0;
    let temp2 = num;

    while (temp2 > 0) {
        sum1 += temp2 % 10;
        temp2 = Math.floor(temp2 / 10);
    }
    num = sum1;
} while (num > 9);

if (num === 1) {
    console.log("Magic Number");
} else {
    console.log("Not a Magic Number");
}


//reverce a number
  let num = 12345;
    let reverce = 0;
    while(num > 0){
        let lastDigit = num % 10;
        reverce = reverce * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    console.log(reverce);
let num1 = 12345;
let reverce1 = 0;
  do{
    let lastDigit1 = num1 % 10;
    reverce1 = reverce1 * 10 + lastDigit1;
    num1 = Math.floor(num1 / 10);
    }while(num1 > 0);
    console.log(reverce1);

for(let num2 = 12345; num2 > 0; num2 = Math.floor(num2 / 10)){
     let lastDigit2 = num2 % 10;
        reverce1 = reverce1 * 10 + lastDigit2;
    }       
    console.log(reverce1);
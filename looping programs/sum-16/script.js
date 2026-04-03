
//WAP to check whether a number is Armstrong number or not using while loop, do…while loop, for loop.

 let num = 16;
 let sum2 = 0;
    for (let i = 1; i <= num; i++)
    {
       sum2 += i;
    }
    console.log(sum2);

    let i = 1;
    while (i <= num) {
        sum2 += i;
        i++;
    }       
    console.log(sum2);

let k = 1;
do {
    sum2 += k;
    k++;
} while (k <= num);

console.log(sum2);

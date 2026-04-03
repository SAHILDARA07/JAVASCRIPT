// sum of numbers from 1 to n
let n = 5;
let sum = 0;    
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum); 
let i = 5;
while (i <= n) {
    sum += i;
    i++;
}console.log(sum); 
let j = 5;    
do {
    sum += j;
    j++;
} while (j < 0);
console.log(sum);
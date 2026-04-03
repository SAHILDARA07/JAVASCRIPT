// leap year
let year = 2020;
while (year <= 2030) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    }   else {  
        console.log(year + " is not a leap year.");
    }
    year++;
}
let year2 = 2020;
do{
    if ((year2 % 4 === 0 && year2 % 100 !== 0) || (year2 % 400 === 0)) {
        console.log(year2 + " is a leap year.");
    } else {
        console.log(year2 + " is not a leap year.");
    }   
    year2++;
} while (year2 <= 2030)  
  for (let i = 2020; i <= 2030; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        console.log(i + " is a leap year.");
    } else {
        console.log(i + " is not a leap year.");
    }
}
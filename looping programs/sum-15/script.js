// prime number
   let num = 15;
   let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }       
    }

    if (isPrime) {
        console.log(num + " is a prime number");
    } else {
        console.log(num + " is not a prime number");
    }

while (num <= 20) {
    let isPrime = true; 
    if (num <= 1) {
        isPrime = false;
    }
    else {

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num + " is a prime number");

    } else {
        console.log(num + " is not a prime number");
    }       
    num++;
}

do {    
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    }   else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num + " is a prime number");
    }

    else {
        console.log(num + " is not a prime number");
    }       
    num++;
}while (num <= 20);

   let n = 1;
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += n;
        n = n * 10 + 1; // Generate the next number in the sequence
    }
    console.log(sum); // Output the final sum
    while (sum > 9) {
        console.log(sum);
        sum = Math.floor(sum / 10); // Remove the last digit
    }
    console.log(sum); // Output the final single-digit result
    let sum2 = 0;
    let n2 = 1;
    do{
        console.log(sum2);
        sum2 = Math.floor(sum2 / 10); // Remove the last digit
    }while(sum2 > 9);
    console.log(sum2); // Output the final single-digit result

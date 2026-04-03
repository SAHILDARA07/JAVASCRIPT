// find sum of digits of number
  let num = 13;
    let sum = 0; 
    while (num > 0) {
      sum += num % 10; 
      num = Math.floor(num / 10); 
    }
    console.log(sum);
    let i = 12;
     let sum2 = 0;
     for (i; i > 0; i--) {
      if (i === 13) {
        continue; 
      } 
        sum2 += i;
        }
        console.log(sum2);
        do{
            if (i === 13) { 
                continue;
            }
            sum2 += i;
            i--;
        } while (i > 0);



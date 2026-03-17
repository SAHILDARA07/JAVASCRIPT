// Write a JavaScript program to calculate total marks and percentage of 5 subjects.
  
 let  Sanskrit = 88;
 let  Hindi = 98;
 let  English = 84;
 let  Maths = 94;
 let  Science = 78;
  
    let totalMarks = Sanskrit + Hindi + English + Maths + Science;
    let percentage = (totalMarks / 500) * 100;
  
    console.log(totalMarks);
    console.log(percentage.toFixed(2) + "%");
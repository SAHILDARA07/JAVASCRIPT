// wap to find sum of all elements of the array by using function ?

function sumofarray(arr){
    let sum = 0;
    arr.foreach((a)=>{
        sum+=a;
    })
    return sum ;
}

 //const array = [1,2,3,4,5,6,7,8,9,10]
const ans =  sumofarray (array);

console.log(ans)


// wap to find maximum from array using function.

const array = [1,12,47,49]

function findmax(arr) { // [1,12,47,49]
    let max = arr[0];  // MAX=1

    array. forEach((a) => { // a = 12
        if (max < a) {  // 1< 12 : true
            max = a; // max = 47
        }
    })
    return max;
}
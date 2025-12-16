function sumOfArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
}
console.log(sumOfArray([12,23,45]));

// sum of digit
function sumOfDigit(num){
    let sum = 0;
    
    while(num>0) {
        let digit = num % 10;
        sum = sum +digit;
        num = (num-digit)/10;
    }
    return sum;
}
console.log(sumOfDigit(125));
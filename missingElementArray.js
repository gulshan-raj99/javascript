function findMissingNumber(arr, n){
    // sum of number 1 to n
    let expectedsum = (n * (n+1))/ 2;

    // sum of given array;
    let actualsum = 0;
    for(let num of arr){
        actualsum +=num;
    }
    //missing = expected - actual
    return expectedsum - actualsum;
}
console.log(findMissingNumber([1,2,3,5],5));
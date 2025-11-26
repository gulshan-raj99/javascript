function findMax(arr) {
    let max = arr[0];
    for(let n of arr) {
        if (n > max) max = n;
    }
    return max;
}
console.log(findMax([2,4,7,12]));
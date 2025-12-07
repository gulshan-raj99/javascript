function reverseArray(arr){
    let result = [];
    let index = 0;

    for(let i = arr.length-1; i>=0; i--){
        result[index] = arr[i];
        index ++;
    }
    return result;
}
console.log(reverseArray([23,55,76,88,25]));
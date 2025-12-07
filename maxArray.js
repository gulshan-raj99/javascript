function maxArrayElement(arr){
    let max = arr[0];
    for(let i =0; i<arr.length;i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArrayElement([23,55,77,28,87]));
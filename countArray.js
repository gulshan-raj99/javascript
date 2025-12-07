// 2,20,20,22

function countArrayElement(arr){
    let result = {};

    for(let i = 0; i<arr.length; i++){
        let index = arr[i];
        if(result[index]) {
            result[index] ++;
        } else {
            result[index] = 1;
        }
    }
    return result;
}
console.log(countArrayElement([23,33,42,42,22,13,13]));
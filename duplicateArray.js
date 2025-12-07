// 22,33,43,43
function duplicate(arr) {
    let result = [];

    for(let i = 0; i<arr.length;i++){
        let isDuplicate = false;
        
        for(let j=0; j<result.length;j++){
            if(arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(duplicate([23,43,33,33,45,43]));
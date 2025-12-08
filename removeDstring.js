// Remove Duplicate Characters
// -> Remove repeated characters from a string

function removeDuplicate(str){

    return [...new Set(str)].join('');
}

console.log(removeDuplicate('aeeeaaaieghsp'));

const duplicate = (str) => {
    let result = "";
    
    for(let char of str){
        if(!result.includes(char)) {
            result +=char;

        }
    }
    return result;
}
console.log(duplicate("Bananana"))

// type 3
function duplicate(str){
    let result = "";
    for(let i=0; i<str.length;i++){
        let ch = str[i];
        let found = false;
        for(let j = 0; j<result.length;j++){
            if (result[j] === ch){
                found = true;
                break;
            }
        }
        if(!found){
            result += ch;
        }
    }
    return result;
}
console.log(duplicate("Banana"));
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
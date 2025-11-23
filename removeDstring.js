// Remove Duplicate Characters
// -> Remove repeated characters from a string

function removeDuplicate(str){

    return [...new Set(str)].join('');
}

console.log(removeDuplicate('aeeeaaaieghsp'));
// count occurence of each character in a string
// -> Return character frequency

function charFrequency(str) {
    let map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) +1;
    }
    return map;
}
console.log(charFrequency("hello"));

// 2nd method

const charCount = (str)=> {
    let result = {};
    for(let char of str) {
        if(result[char]){
            result[char] ++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}
console.log(charCount("Banana"));
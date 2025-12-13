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

//3rd way
function occurence(str){
    let result = {};
   
    for(let i =0; i<str.length;i++){
      let ch = str[i];
      if(result[ch]){
          result[ch]++;
      }else{
          result[ch]=1;
      }
    }
    return result;
}
//const input = prompt("Enter a string "); -> prompt is only for browser
//console.log(occurence(input));

// ternary operator = condition ? valueIfTrue : valueIfFalse;
function frequency(str){
    let freq = {};
    
    for(let i = 0;i<str.length;i++){
        let ch = str[i];
        freq[ch] = freq[ch]? freq[ch] +1 : 1;
    }
    return freq;
}
console.log(frequency("banana"));
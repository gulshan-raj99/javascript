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
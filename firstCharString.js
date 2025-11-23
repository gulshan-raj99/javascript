// Find  the First Non-Repeating Character  in string
// -> return the first character that appears only once

function firstUniqueChar(str) {
    for ( let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstUniqueChar("swiss"));
console.log(firstUniqueChar("Hello"));
// Find the longest string word in a sentence

function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';

    for ( let word of words){
        if (word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('my name is Gulshan Raj'));
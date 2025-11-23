// captalize first letter of each word in a string.

function catalize(sentence) {
    return sentence
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(catalize('my name is gulshan raj'));
// check if string is palindrome

// -> A string is a palindorme if it reads the same backwards.

function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length -1; i>=0; i--) {
        reversed += str[i];
    }
    if(str === reversed) {
        console.log(str + " is a palindrome string");
    } else {
        console.log(str + " is not a palindrome string");
    }
}

isPalindrome("madam");
isPalindrome("hello");
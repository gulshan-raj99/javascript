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

function isPalindrome(str) {
    let reveserd = "";
    for(let char of str) {
        reveserd = char + reveserd;
    }
    return str == reveserd;
}
console.log(isPalindrome("madam"));

function isPalindrome2(num) {
    const str = num.toString();
    const reserved = str.split("").reverse().join("");
    return str == reserved;
}
console.log(isPalindrome2(121));
console.log(isPalindrome2(345));

function isPalindrome3(num){
    let original = num;
    let rev = 0;
    while(num>0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = (num- digit) / 10;
    }
    return rev === original;
}
console.log(isPalindrome3(121));
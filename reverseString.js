let name = "Gulshan Raj";

let reversedStr = name.split('').reverse().join('');

console.log("Reversed string is:" , reversedStr);

// without using reverse function

function  reverseString(strr) {
    let reversed = "";
    for ( let i = strr.length -1; i >=0; i--) {

        reversed += strr[i];
    }
    return reversed;
}
console.log("Reversed string without using reverse function is:", reverseString("Hello World"));
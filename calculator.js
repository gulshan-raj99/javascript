function calculator(a,b, operation) {

    switch(operation){
        case "add":
            return a + b;
        
        case "subtract":
            return a - b;

        case "multiply":
            return a * b;
        
        case "divide":
            return a / b;

        default:
            return "Invalid operation";
    }
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 5, "divide"));
console.log(calculator(10, 5, "modulus"));

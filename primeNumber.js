const isPrime = (num) => {
    if(num<2){
        return true;
    }
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));


// prime number in given number limit
const printPrime = (limit) => {

    for(let num = 1; num<= limit; num ++){

        let isPrime = true;
        
        for(let i = 2; i<num; i++) {
            if(num % i === 0) {
                isPrime = false;
                break;
            };
        }
        if(isPrime){
            console.log(num);
        };

    }  
}
printPrime(50);


const rangePrime = (a,b) => {
    for(let i = a; i <=b ; i++){
        let isPrime = true;
        
        for(let j= 2; j< i; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}
rangePrime(20,56);
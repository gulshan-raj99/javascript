function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();

// 2nd example
let a= 200;
function one(){
    let b = 100;
    function second(){
        console.log(a+b);
    }
    second();
}
one();
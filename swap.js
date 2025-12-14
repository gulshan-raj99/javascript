function swap(a,b){
    a = a+b;
    b= a-b;
    a = a-b;
    return [a,b];
}
console.log(swap(10,20));

function swap2(x,y){
    x = x^y;
    y = x^y;
    x = x^y;
    return [x,y];
}
console.log(swap2(12,25));
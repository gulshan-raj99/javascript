let arr = [11,22,25,27,28];

arr.forEach((num) => {
   console.log(num);
})

let result = arr.every((num) => {
    num % 2 === 0;
});
console.log(result);
// Double each element in the array

const numbers = [2,4,6,8];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [4, 8, 12, 16]

// 2. Extract properties from array of objects.

const users = [
    {name: 'Gulshan', age: 25},
    {name: 'Raj', age: 30}
]

const names =  users.map(user => user.name);

console.log(names); // Output: ['Gulshan', 'Raj']
// Get even numbers from an array

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evens = numbers.filter(num => num % 2 ===0);

console.log(evens); // Output: [2,4,6,8,10]

//2. Filter user older than 20

const users = [
    {name: 'Gulshan', age: 25},
    {name: 'Raj', age: 18},
    {name: 'Amit', age: 30}
];

const older = users.filter(user => user.age > 20);

console.log(older); // Output: [{name: 'Gulshan', age: 25}, {name: 'Amit', age: 30}]
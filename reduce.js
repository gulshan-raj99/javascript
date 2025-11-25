// reduce() reduces the array to a single value by accumulating results.

// 1. Sum of numbers in an array

const arr = [1, 2, 3];

const sum = arr.reduce((acc, num) => acc + num, 0);

console.log(sum); // 6

//2. Count occurrences of elements in an array

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruits) => {
    acc[fruits] = (acc[fruits] || 0) + 1;
    return acc;
}, {});

console.log(count); // { apple: 3, banana: 2, orange: 1 }


// 3. convert array to object

const users = [
  { id: 1, name: "Gulshan" },
  { id: 2, name: "Raj" },
  {id: 3, name: "Amit" }
];

const userObj = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(userObj);
// { 1: "Gulshan", 2: "Raj" }

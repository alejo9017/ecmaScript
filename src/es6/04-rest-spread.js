// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, fruits[1]);

// object Destructuring

let user = { userName: 'Alejandro', age: 31 };
let { userName, age } = user;
console.log(userName, user.age);

// spread operator

let person = { name: 'Alejandro', age: 31 };

let country = 'CO';

let data = { id: 1, ...person, country };
console.log(data);
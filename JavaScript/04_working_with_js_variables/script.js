// ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

// console.log(firstName, lastName, age); age is undefined reason: hoisting

let age = 30;
console.log(age);

//Naming Convention

/* only letters, numbers, underscore, and dollor sign */

// Re-assigned
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
	score += 1;
}

console.log(score);

const x = 100;

//const cann't initiated
//const we can't directly re assign

const arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);

const person = {};

person.name = 'john';
person.lname = 'doe';
person.email = 'johndoe@email.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

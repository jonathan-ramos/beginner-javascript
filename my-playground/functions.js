console.log('Functions!');

// ORIGINAL NON ARROW FUNCTION
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// CONVERTING A REGULAR FUNCTION TO AN ARROW FUNCTION
// 1. Turn the function into an anonymous function by putting the function inside a const or variable and removing the function name.
// const inchToCM = function(inches) {
//     return inches * 2.54;
// }

// 2. Delete the word function and go to the right of the parenthesis, and add a fat arrow =>
/* eslint-disable */
// const inchToCM = (inches) => {
//     return inches * 2.54;
// }

// 3. Put everything on one line
// const inchToCM = (inches) => { return inches * 2.54; };

// 3. Delete the curly brackets
// 4. Delete the keyword 'return'
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }
// const add = (a, b = 3) => a + b;

const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// const makeABaby = (first,last) => {
//     return {
//         name: `${first} ${last}`;
//         age: 0;
//     }
// }
const makeABaby = (first,last) => ({ name: `${first} ${last}`, age: 0});



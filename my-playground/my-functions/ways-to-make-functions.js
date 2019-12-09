console.log('It works!');
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }
// ANONYMOUS FUNCTION
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// HOISTING -> javascript takes all functions (declared with the function keyword) and hoists them up and makes them available immediately. It does not hoist variable functions/function expressions
//          -> It means you can run a function before its defined.

// console.log(doctorize('jon'));

// // REGULAR FUNCTION
// function doctorize(firstName) {
//   return `Dr. ${firstName.toUpperCase()}`;
// }

// // FUNCTION EXPRESSION (** this type of function cannot be hoisted);
// const doctorize2 = function(firstName) {
//   return `Dr. ${firstName.toUpperCase()}`;
// };

// ARROW FUNCTIONS ARE ANONYMOUS FUNCTIONS. IT NEEDS TO BE STUCK TO A VARIABLE

// function inchToCM(inches) {
//   return inches * 2.54;
// }
// const inchToCM = function(inches) {
//   return inches * 2.54;
// };
/* eslint-disable */
// Remove the word 'function' and add a fat arrow to the right of the parameter
// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

const inchToCM = (inches) =>  inches * 2.54 ;


// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

const add = (a, b = 3) => a + b;

//returning an object 

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }
const makeABaby =  (first, last) => {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
}
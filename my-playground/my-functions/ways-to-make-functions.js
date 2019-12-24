console.log('It works!');
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }
// console.log(doctorize('jon'));

// ANONYMOUS FUNCTION
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// HOISTING -> javascript takes all functions (declared with the function keyword) and hoists them up and makes them available immediately. It does not hoist variable functions/function expressions
//          -> It means you can run a function before its defined.

// // REGULAR FUNCTION
// console.log(doctorize2('jonathan'));

// function doctorize(firstName) {
//   return `Dr. ${firstName.toUpperCase()}`;
// }

// // FUNCTION EXPRESSION (** this type of function cannot be hoisted);
// const doctorize2 = function(firstName) {
//   return `Doctor ${firstName}`;
// };

// ARROW FUNCTIONS ARE ANONYMOUS FUNCTIONS. IT NEEDS TO BE STUCK TO A VARIABLE

/* eslint-disable */

// CONVERTING REGULAR FUNCTIONS TO ARROW FUNCTIONS
// Step 0: Regular function
// function inchToCM(inches) {
//   return inches * 2.54;
// }


// Step 1: Convert the function into an anonymous function and assign it to a variable.
// const inchesToCM = function(inches) {
//   return inches * 2.54;
// };

// Step 2: remove the word function, and add a fat arrow after the paramters
// const inchesToCM = (inches) => {
//     return inches * 2.54; // Explicit return
// };

// Step 3: Return an implicit return. Delete the curly brackets, delete the keyword return.
// const inchesToCM = (inches) => inches * 2.54; 

// Step 4: Style choice : you can remove the parenthesis from single parameter functions.
const inchesToCM = inches => inches * 2.54; 

// Excercise 2: Convert this function to an arrow function. 
// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

// const add = (a, b = 3) => a + b; 

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: `0`
//     }
//     return baby;
// }

// CONVERT OBJECT FUNCTIONS INTO ARROW FUNCTIONS
// Step 1 : stick the function into a variable, remove the name, and add a fat arrow
// const makeABaby = (first, last) => {
//     const baby = {
//         name: `${first} ${last}`,
//         age: `0`
//     }
//     return ;
// }


// Step 2 : remove the const baby and just return all the properties directly.
// const makeABaby = (first, last) => {
//     return {
//         name: `${first} ${last}`,
//         age: `0`
//     }
// }

// Step 3 : Place it all in one line, remove the curly bracket and the return keyword
// const makeABaby = (first, last) => { name: `${first} ${last}`, age: `0` };

// Step 4 : Add a parenthesis to contian the object block
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: `0` });

// Step 5: the arrow function version of makeABaby is not better than the regular function. The regular function is more readable. 


// IIFE
// Immediately Invoked Function Expression



// function makeABaby(firstname, lastname) {
//     const baby = {
//         name: `${firstname} ${lastname}`,
//         age: 0
//     }
//     return baby;
// }


// Convert this into an arrow function
// Step 1:  Stick this into a variable;
// const makeABaby = function(firstname, lastname) {
//     const baby = {
//         name: `${firstname} ${lastname}`,
//         age: 0
//     }
//     return baby;
// }
// Step 2: Replace function keyword with an arrow
// const makeABaby = (firstname, lastname) => {
//     const baby = {
//         name: `${firstname} ${lastname}`,
//         age: 0
//     }
//     return baby;
// }
// Step 3: Retun the object properties directly by removing the objectname inside the function
// Step 4: Put it all in one line.
// const makeABaby = (firstname, lastname) => { return { name: `${firstname} ${lastname}`, age: 0 } }
// Step 5: Turn it into an implicit return by removing the Brackets before the return keyword. Note if you are implicit returning an object, you will need to wrap it in a parenthesis.
const makeABaby = (firstname, lastname) => ({ name: `${firstname} ${lastname}`, age: 0 });


//IIFE 
//Immediately Invoked Function Expression
(function(){
    console.log(`Running an anonymous function`);
    return `You are cool`;
})();

//Methods!!!!
//Simply a function that lives inside an object

// const wes = {
//     name: 'Wes Bos',
//     // Method
//     sayHi: function(){
//         console.log('Hey Wes');
//         return 'Hey Wes'
//     },
//     // Short hand method
//     // instead of yellHi: function(){}
//     yellHi() {
//         return 'HEEEEEY WEEEEESSSSS!!!'
//     },
//     // Arrow function
//     wisperHi: () => {
//         return 'hiiii weessss...shhhhh';
//     }
// }

// Methods!!!!
// Function that lives inside an object;

const wes = {
    name: 'Wes Bos',
    sayHi: function() {
        console.log(`hi!`);
        return 'Hey Wes';
    },
    yellHi() {
        console.log(`HEEEEEEYYYYYY WEEEEESSSSSSS!!!!`);
    },
    wisperHi: () => `hiiii...sshhhh...`
}

// Callback functions
// Something that will happen when something is done.
// A function that is passed into another function and called at a later time.
// click callback
const button = document.querySelector('.clickMe');

// button.addEventListener('click', wes.yellHi);

// function handleClick() {
//     console.log(`Great Clicking!!!`);
// }

// button.addEventListener('click', handleClick);

button.addEventListener('click', function(){
    console.log(`Nice Job!!!`);
});

// Timer callback
// first argument is the function to call to run after a certain amount of time, second is the duration in ms
setTimeout(function() {
    console.log(`Done! Time to eat`);
}, 1000);

setTimeout(wes.yellHi, 2000);
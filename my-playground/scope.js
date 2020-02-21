console.log('it works!');
/* eslint-disable */
// 1. GLOBAL SCOPE, when variables are not within a function, an object, a method.
// const first = 'jon';
// let second = 'ramos'; /* const and let are globally scoped, but not attached to the window object */
// var age = 100; /* var is globally scoped and attached to the window */


// function sayHi() {
//     console.log('hi');
// }


// 2. FUNCTION SCOPE, when variables are created inside a function, that variable is only available within that function
// const age = 100;
// function go() {
//     const age = 200;
//     const hair = 'blonde';
//     console.log(age);
//     console.log(myAge);
//     console.log(hair);
// }
// go();
// console.log(age);
// console.log(hair); /* hair is only available wiithin the function */
// Note the age variable in the global and function scope. the go() will return 200 because the function will look into variables within the function first, then look outside it if it does not exist.

// 3. BLOCK SCOPE
// For block scope, best to use const and let as it will only be avialable to within the block.
// Const and Let are only available within the block it was defined.
// var on the otherhand, is function scoped.
// if (1 == 1) {
//     let cool = true;
// }
// console.log(cool);
// // function isCool(name) {
// //     let cool;
// //     // Block scope
// //     if (name === 'wes') {
// //         cool = true;
// //     }
// //     console.log(cool);  
// //     return cool;
// // }

// function isCool(name) {
//     let cool;
//     if(name === 'wes') {
//         cool = true;
//     }
//     console.log(cool);
//     return(cool);
// }
// isCool('wes')

const dog = 'snickers';

function logDog (){
    console.log(dog);
}
function go() {
    const dog = 'sunny';
    logDog();
}
go();
// This returns snickers. This is because  (Lexical scoping) or scope lookup happens are where it was defined, not where they are run.

// BEST PRACTICES FOR VARIABLES
// 1. Try not to create global variables
// 2. Functions are scoped exactly like a variable.

function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase());
    }
    yell();
}
yell();

// HOISTING -- javascript allows access to functions and variables before they are created.
// (2) ITEMS THAT ARE HOISTED IN JS:
// 1. Function declaration
// 2. Variable declaration

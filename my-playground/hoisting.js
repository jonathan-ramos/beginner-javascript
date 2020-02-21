// HOISTING -- javascript allows access to functions and variables before they are created.
// (2) ITEMS THAT ARE HOISTED IN JS:
// 1. Function declaration
// 2. Variable declaration
/* eslint-disable */
console.log('Hoisting!');
sayHi();

// NOTE THAT VARIABLE DECLARATION IS HOISTED, BUT IT WILL NOT HOIST THE SETTING OF THE VALUE.
// SO BEFORE EVERYTHING RUN, I WILL MAKE THE VARIABLES, THEN I CAN UPDATE THEM.
console.log(age);
var age = 10;

function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

// NOTE THAT THIS IS A FUNCTION STUCK IN A VARIABLE AND WILL NOT BE HOISTED, SAME WITH ARROW FUNCTIONS. ONLY WORKS WITH REGULAR FUNCTIONS. NOT REALLY TOO USEFUL.
const add = function (a, b) {
    return a + b;
}
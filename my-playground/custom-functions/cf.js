//Function definition
function calculateBill(billAmount, taxRate) {
    // NOTE: this is the function body
    console.log(billAmount, taxRate);
    console.log('Running Calculate Bill!!');
    const total = billAmount * (1 + taxRate);
    return total;
}

//Function call or **Run**
const jonTotal = 500;
const jonTaxRate = 0.3;

const myTotal = calculateBill(jonTotal, jonTaxRate);
// console.log(myTotal);

// NOTE: Paramters are "P" Placeholders within a function definition
// NOTE: Arguments are "A" Actual values within a function call



//Function Definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

const greeting = sayHiTo('JonnyBones');
console.log(greeting);

// NOTE: You can pass expressions within a function. It will run the expression first before proceeding with the function.
const kait = 100;
const myTotal3 = calculateBill(kait + 100, 0.15);


// Its ok to reuse variable names as parameters.
// Each of these parameters are scoped within their own functions
function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name) {
    return `Hey ${name.toUpperCase()}`;
}

console.log(`${yell(doctorize('jonnybonesjones'))}`);
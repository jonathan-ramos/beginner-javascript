@ -1,115 +0,0 @@
/* eslint-disable */

/* ********** */
/* 01.STRINGS */
/* ********** */
console.log('it works');
const name = 'jon';
const middle = 'bones';
const last = 'jones';

const sentence = 'she\'s so \"cool\" \\';
const sentence2 = `she's so "cool"`;
console.log(sentence2);

// backticks does not need to escape quotes and doublequotes 
// backticks also maintains any linebreak within your string 
const song = `Oh 

ya

I like

pizza`;

console.log(song);

// concatenation  = combining 2 or more words 
// interpolation = adding a variable within a string 

const hello = "hello my name is " + name + ". Nice to meet you.";
const goodbye = `hello my name is ${name}. See you later.`;
console.log(hello);

const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
        <p>${goodbye}</p>
    </div>
`
document.body.innerHTML = html;

/* ********** */
/* 02.NUMBERS */
/* ********** */

// integer = whole number
// float = number with a decimal
const age = 100;
const name2 = 'jon';

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`each kid gets ${eachKidGets}, dad gets ${dadGets}`);

/* ********** */
/* 03.OBJECTS */
/* ********** */

const person = {
    first: 'jon',
    last: 'jones',
    age: 100
};

// TYPES MEMEORY HOOK 'SNOBUSN' => STRING, NUMBERS, OBJECT, BOOLEAN, UNDEFINED, SYMBOL, NULL


/* ********************* */
/* 04.NULL AND UNDEFINED */
/* ********************* */

// UNDEFINED => variable that has been created but does not have any value.

// NULL => A value of nothing. Null is a value that can be assigned to a variable or a

let dog;
console.log(dog);


let somethingUndefined;
const somethingNull = null;


const cher = {
    first: 'cher'
}

const teller = {
    first: 'Raymond',
    last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

var some_item = null;
console.log(`some item = "${some_item}"`);

/* ******************* */
/* BOOLEANS            */
/* ******************* */
let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(age);
console.log(ofAge);

// Triple equals === checks for both the value and the type
// Double equals == only checks for the value

age = 100;
let age2 = 100;
// SUMMARY
// 1. .createElement();
// 2. .appendChild();
// 3. .insertAdjacentElement(position, elementToAdd); | better than appendchild
// 4. .cloneNode(true)

console.log('Creating JS!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a Paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// ADD THE ELEMENTS CREATED TO THE PAGE.
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// CODE ABOVE WORKS, BUT IT IS BEST TO CREATE ALL THE ELEMENTS FIRST, BEFORE ADDING IT TO THE PAGE.
// MYDIV SHOULD BE APPENDED TO THE PAGE ONLY AFTER ALL ELEMENTS ARE CREATED.
// MINIMIZES THE BROWSER REPAINT / REFLOW
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// Oh shoot! We need to add something to the top like a heading!
const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

li1.textContent = 'one';
li2.textContent = 'two';
li3.textContent = 'three';
li4.textContent = 'four';
li5.textContent = 'five';

list.insertAdjacentElement('afterbegin', li2);
list.insertAdjacentElement('beforeend', li5);
li2.insertAdjacentElement('beforebegin', li1);

myDiv.insertAdjacentElement('beforeend', list);

const li6 = li5.cloneNode(true);
list.insertAdjacentElement('beforeend', li6);
const footer = document.createElement('footer');
const footerNote = document.createElement('h1');
footerNote.textContent = `I've added a footer`;
footerNote.classList.add('footer');
footer.insertAdjacentElement('beforeend', footerNote);
document.body.insertAdjacentElement('beforeend', footer);

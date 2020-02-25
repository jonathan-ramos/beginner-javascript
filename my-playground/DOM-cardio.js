console.log('Dom Cardio starting!');
// Make a div
// add a class of wrapper to it
// put it into the body
const div = document.createElement('div');
div.classList.add('wrapper');
document.body.insertAdjacentElement('afterbegin', div);

// make an unordered list
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = 'one';
li2.textContent = 'two';
li3.textContent = 'three';
ul.insertAdjacentElement('afterbegin', li1);
li1.insertAdjacentElement('afterend', li2);
ul.insertAdjacentElement('beforeend', li3);
document.body.appendChild(ul);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const img = document.createElement('img');
img.src = `https://picsum.photos/200`;
img.width = 200;
img.classList.add('cute');
img.alt = 'Cute Puppy';
const wrapper = document.querySelector('.wrapper');
wrapper.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

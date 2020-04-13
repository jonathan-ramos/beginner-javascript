console.log('event cardio 5');
// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.insertAdjacentHTML('afterbegin', ul);
// create an image
const img = document.createElement('img');
img.src = `https://picsum.photos/200`;
img.width = 250;
img.height = 250;
img.classList.add('cute');
img.alt = 'Cute Puppy';
div.appendChild(img);
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myHTML">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;
// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const myHTMLElement = div.querySelector('.myHTML');
// remove the first paragraph
myHTMLElement.children[1].classList.add('warning');
myHTMLElement.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  // to do later;
  const html = `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height}cm tall and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">x Delete</button>
    </div>
  `;
  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let playerCard = generatePlayerCard('Jon', 39, 150);
playerCard += generatePlayerCard('Wes', 34, 180);
playerCard += generatePlayerCard('Mia', 22, 130);
playerCard += generatePlayerCard('Khayla', 28, 140);
console.log(playerCard);
// append those cards to the div
cards.insertAdjacentHTML('afterbegin', playerCard);
div.insertAdjacentElement('beforeBegin', cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function removeCard(e) {
  const buttonThatGotClicked = e.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', removeCard));

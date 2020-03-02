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
`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
console.log(div);
div.insertAdjacentHTML('afterbegin', ul);
// create an image
const img = document.createElement('img');
// set the source to an image
img.src = `https://picsum.photos/200`;
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = `Cute Puppy`;
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const html = `
    <div class="innerDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;
// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', html);
// add a class to the second paragraph called warning
// remove the first paragraph
const innerDiv = document.querySelector('.innerDiv');
console.log(innerDiv.children);
innerDiv.children[0].remove();
console.log(innerDiv.lastElementChild);
innerDiv.lastElementChild.classList.add('warning');

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  let playerCard = `
        <div class="playerCard">
            <h2>${name} = ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
            <button class="delete" type="button">Delete</button>
        </div>
    `;
    return playerCard;
}
// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
console.log(cards);
// Have that function make 4 cards
const card1 = generatePlayerCard('jon', 32, '6.4ft');
const card2 = generatePlayerCard('mike', 28, '5.9ft');
const card3 = generatePlayerCard('amy', 44, '5.4ft')
const card4 = generatePlayerCard('jonny', 41, '5.11ft');

// append those cards to the div
cards.innerHTML = card1 + card2 + card3 + card4;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
function deleteCard(event) {
    console.log(event.currentTarget);
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
// const buttons = document.querySelector('.delete');
// buttons.addEventListener('click', remove);

const buttons = document.querySelectorAll('.delete');
buttons.forEach(button => button.addEventListener('click', deleteCard));
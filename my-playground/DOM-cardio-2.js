// SUMMARY
// 1. insertAdjacentHTML works for nodes and inserts them as html
// 2. event.currentTarget
// 3. .parentElement
// 4. .closest *** note that this is much better than parentElement selector

console.log('It works! Lets start the DOM Cardio!')
// Make a div
const div = document.createElement('div');
console.log(div);
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
// set the source to an image
img.src = `https://picsum.photos/200`;
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute puppy'
// Append that image to the wrapper
div.appendChild(img);


const myHTML = `
    <div class="myDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
div.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
console.log(myDiv.children);
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    console.log('yey function!')
    let playerCard = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
            <button class="delete" type="button">delete</button>
        </div>
    `;
    return playerCard;
}
generatePlayerCard('jon', 15, '180cm');
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const playerDiv = document.createElement('div');
playerDiv.classList.add('cards');
const card1 = generatePlayerCard('Jon', 15, '182cm');
const card2 = generatePlayerCard('mike', 22, '140cm');
const card3 = generatePlayerCard('Shelby', 5, '120cm');
const card4 = generatePlayerCard('Rob', 16, '190cm');
// Have that function make 4 cards
console.log(typeof card1);
playerDiv.insertAdjacentHTML('afterbegin', card1);
playerDiv.insertAdjacentHTML('afterbegin', card2);
playerDiv.insertAdjacentHTML('afterbegin', card3);
playerDiv.insertAdjacentHTML('afterbegin', card4);

div.insertAdjacentElement('beforebegin', playerDiv);
// append those cards to the div

// Select all buttons
const buttons = document.querySelectorAll('.delete');
// Make delete function
function deleteCard(event) {
    console.log('Delete card later')
    const buttonThatGotClicked = event.currentTarget;
    console.log(buttonThatGotClicked);
    // buttonThatGotClicked.parentElement.remove();
    buttonThatGotClicked.closest('.playerCard').remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard));
console.log(buttons)

// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

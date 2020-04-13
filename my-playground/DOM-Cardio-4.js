// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `
    <ul>
        <li>List item One</li>
        <li>List item Two</li>
        <li>List item Three</li>
    </ul>
`;
div.insertAdjacentHTML('afterbegin', ul);
// add three list items with the words "one, two three" in them
// put that list into the above wrapper

// create an image
const myImg = document.createElement('img');
myImg.src = `https://picsum.photos/200`;
myImg.width = 250;
myImg.classList.add('cute');
myImg.alt = 'Cute Puppy';
div.appendChild(myImg);
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

myHTML = `
    <div class="myHTML'>
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;
console.log(ul);
// ul.insertAjacentHTML('beforebegin', myHTML);
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

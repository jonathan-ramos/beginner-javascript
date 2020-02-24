console.log('Crating with strings!');

// SUMMARY:
// 1. Create strings using BACKTICKS `{var}`;
// 2. HTML tags created using backticks are treated as strings. It will need to be added to the Dom before you can access it as html elements.
// 3. console.log(typeof myHTML) will result in string.
// 4. you can add the string to the page with .innerHTML, insertAdjacentElement, etc.
// 5. you can now access the elements once its been added to the page.
// 6. document.createRange().createContextualFragment() will create html elements out of strings even before it is added to the page.
// 7. Introduction of XSS or Cross Site Scripting

const item = document.querySelector('.item');
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src='${src}' alt="${desc}"/>
    </div>
`;

// // THIS WILL BE UNDEFINED, UNTIL IT HAS BEEN ADDED TO THE DOM
// console.log(myHTML.classList);
// console.log(typeof myHTML);

// // ONCE THIS HAS BEEN ADDED, YOU CAN NOW ACCESS IT AS NORMAL HTML
// item.innerHTML = myHTML;
// console.log(item.innerHTML);

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');
// console.log(itemImage);
// const newItem = document.querySelector('.wrapper');
// console.log(typeof newItem);

// TURN STRINGS INTO A DOM ELEMENT
// range = a collection of elements
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);

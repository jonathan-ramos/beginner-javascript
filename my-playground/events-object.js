// The Event Object is an object based on the event describing the event that has occured, including the event type (mouseclick, tap, etc)
// This is the first argument in a callback function

// event.target (the specific item that was clicked)
// event.currentTarget (the item to the left of the eventlistener or element that triggered the click)
// event.stopPropagation();

// event.target.dataset.price (or any item in the data attribute)
// The difference is when the element has nested elements inside it.
// Event.target is the actual element that was clicked on (in this case, you can click on the nested strong tag).
// Event.currentTarget is the element that triggerted the click.
// console.count;
// PROPAGATION = when you click on an element, it bubbles up from the inner element all the way to the window, to the browser.

console.log(`Events object!`);

const buyButtons = document.querySelectorAll('.buy');

// Create a function to handle the click
function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  //   console.log(button.textContent);
  //   console.log(`You are buying it!`);
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this from bubbling up
  //   event.stopPropagation();
}

// Loop over all buy buttons and attach the handler
buyButtons.forEach(function(buyButton) {
  // 'click' = type, handleBuyButtonclick = listener = callback function
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// You can also add a 3rd argument to the eventlistener
window.addEventListener(
  'click',
  function(e) {
    console.log('You clicked the window!');
    console.log(e.target);
    console.log(e.type);
    console.log(e.bubbles);
  },
  { capture: true }
);

// The this keyword, is always equal to the left of the .addEventListener
// The this keyword, changes when you use arrow funtion
// Best practice is just use e.currentTarget instead of 'this'
const photoEl = document.querySelector('img');
photoEl.addEventListener('mouseenter', function(e) {
  console.count(e.currentTarget);
  console.log(this);
});

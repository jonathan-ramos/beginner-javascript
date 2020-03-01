console.log('Events!');
const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
// Not ideal, as this is an anonymous function and cannot be removed (unbind).
// butts.addEventListener('click', function() {
//   console.log(`butts got clicked!!!`);
// });
const handleClick = () => console.log('Butts got clicked with an arrow');

// Note we do not add the () after the function, as we are only passing a reference. We do not want to run it yet. The browser will only run it once the event has taken place.
butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);
// function hooray() {
//   console.log('Hooray!!!');
// }
const hooray = () => console.log('Hooray!!!');
// function handleClick() {
//   console.log('Butts got clicked with arrow!');
// }
// function handleClick() {
//   console.log('Butts got clicked again');
// }

// butts.removeEventListener('click', handleClick);
butts.addEventListener('click', hooray);
function attachListener() {}
function buyItem() {
  console.log('Buying Item');
}
// // Listen on multiple items
// const buyButtons = document.querySelectorAll('button.buy');
// console.log(buyButtons);
// // For each will run a function for each item in the node list.
// // .forEach gives an argument for every individual element
// // the buyButton parameter on this element, is a reference to the individual element
// buyButtons.forEach(function(buyButton) {
//   // console.log(buyButton);
//   console.log('Bining the buy button');
//   buyButton.addEventListener('click', buyItem);
// });

function attachHandler(param) {
  param.addEventListener('click', buyItem);
}
const buyButtons = document.querySelectorAll('button.buy');
// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', buyItem);
// });

// Using a named function in a forEach
// Note that whenever a forEach is used, it will give a an argument of the individual element in the list. This is passed to the function as a parameter
function attachHandler(anythingiwant) {
  anythingiwant.addEventListener('click', buyItem);
}

buyButtons.forEach(attachHandler);

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('you clickedd it!!!')
  });
});
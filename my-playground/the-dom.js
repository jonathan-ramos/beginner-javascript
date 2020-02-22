// SUMMARY
// 1. document.querySelector(''), document.querySelectoAll('')
// 2. .innerText, .textContent
// 3. .insertAdjacentText('afterbegin', '') -> for appending / prepending text
// 4. .classList -> .add() | .remove() | .toggle()
// 5. Selecting built in attributes with a .
// 6. getAttribute(), setAttribute('', '')
// 7. dataset() -> retrieve all data attributes
// 8. window.addEventListener('load', function() {}); -> wait for everything to load before running the function

// console.log('The dom, works!');
// // WAIT FOR ALL DOM CONTENT TO BE LOADED BEFORE RUNNING YOUR JAVASCRIPT!!!
// // function init(){
// //     const p = document.querySelector('p');
// //     console.log(p);
// // };
// // document.addEventListener('DOMContentLoaded', init);

// // NODELIST ARE DIFFERENT FROM ARRAYS, IN WHICH IT DOES NOT HAVE THE METHODS FILTER, MAP, REDUCE
// const divs = document.querySelectorAll('div');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(imgs);
// console.log(item2Image);
// // DISPLAY ALL THE OBJECT PROPERTIES
// console.dir(heading);
// console.log(heading.innerText);
// console.log(heading.textContent);
// // console.log(heading.textContent);
// // heading.textContent = 'Jon is cool';
// // console.log(heading.textContent);
// // TEXTCONTENT = GET ALL THE ELEMENTS INCLUDING THE SCRIPT AND STYLES OF THE ELEMENT
// // INNERTEXT = ONLY THE HUMAN READABLE TEXT
// console.log(heading.innerHTML);

// outerHTML - includes the wrapping html tags
// innerHTML - only includes anything inside the wrapping tags
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // Most common method to attach text (this forces a redraw of the entire list)
// // pizzaList.textContent = `${pizzaList.textContent}  🍕`;

// // Better method to attach text (does not require a redraw)
// pizzaList.insertAdjacentText('afterbegin', '🍕');

// ADDING AND REMOVING CLASSES
const pics = document.querySelector('.nice');
pics.classList.add('open');
pics.classList.remove('cool');
pics.classList.add('round');
console.log(pics.classList);

function toggleRound() {
  pics.classList.toggle('round');
  console.log(pics.classList);
}
pics.addEventListener('click', toggleRound);

// ATTRIBUTES
pics.alt = 'cute pup';
pics.width = 200;
// THIS WILL RETURN A 0, BECAUSE THE IMAGE HAS NOT YET LOADED
console.log(pics.naturalWidth);

// FIX: WAIT FOR EVERYTHING TO LOAD, INCLUDING IMAGES, CSS, ETC, BEFORE RUNNING THE FUNCTION
window.addEventListener('load', function() {
  console.log(pics.naturalWidth);
});

pics.addEventListener('load', function() {
  console.log(pics.naturalWidth);
});
// GET AND SET ATTRIBUTES
pics.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pics.getAttribute('alt'));

// DATASET - SELECT ALL DATA-ATTRIBUTES
const custom = document.querySelector('.custom');
console.log(custom.dataset);
console.log(custom.dataset.last);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});

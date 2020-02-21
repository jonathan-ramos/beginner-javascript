console.log('The dom, works!')
// WAIT FOR ALL DOM CONTENT TO BE LOADED BEFORE RUNNING YOUR JAVASCRIPT!!!
// function init(){
//     const p = document.querySelector('p');
//     console.log(p);
// };
// document.addEventListener('DOMContentLoaded', init);


const divs = document.querySelectorAll('div');
// NODELIST ARE DIFFERENT FROM ARRAYS, IN WHICH IT DOES NOT HAVE THE METHODS FILTER, MAP, REDUCE
const imgs = document.querySelectorAll('.item img');
console.log(imgs);

const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
console.log(item2Image);



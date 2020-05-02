// MAKING SURE THE FUNCTION ONLY WORKS ON SPECIFIC PAGES
// INTERSECTION OBSERVER - SOMETHING THAT WILL WATCH IF AN ELEMENT IS ON OR OFF OR PARTWAY ON THE PAGE.

// PLACE THE ENTIRE CODE INTO A FUNCTION, CHECK IF IT DOES NOT EXIST AND RETRUN
// if(!elementWeAreLookingFor) { return; }

// WORKING EXAMPLE OF HOW TO USE CONTAIN THE FUNCTION AND EXIT IF ELEMENT IS NOT ON THE PAGE
// const terms = document.querySelector('.terms-and-conditions');
// function scrollToAccept() {
//  if (!terms) {
//      return; // Quit task if the item is not in the page;
//  }
//  terms.addEventListener('scroll', function(e) {
//    console.log(e);
//  });
// }
// scrollToAccept();

console.log('Scroll events works!!!!!');
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  console.log(payload);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

ob.observe(terms.lastElementChild);

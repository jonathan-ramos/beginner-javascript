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

console.log('Scroll events works!!!!');
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

function obCallback(payload) {
  console.log(payload);
}
const ob = new IntersectionObserver(obCallback);

terms.addEventListener('scroll', function(e) {
  // console.log(e);
  console.log(e.currentTarget.scrollTop);
  console.log(e.currentTarget.scrollHeight);
});

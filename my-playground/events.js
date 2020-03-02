//callback function - just a regular function, that is triggered by an event.
//binding - taking a function and listening for a specific click from an element
console.log('Events Works!')
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.coolButton');
// Annonymous function within an event listener
// butts.addEventListener('click', function(){
    //   console.log('IT GOT CLICKED!!!');  
    // });
   
// Note here the you do not use () after the function. This is because you are only referencing the function. the Browser will call and run the function when its time to go ahead.
// having () after the handdleClick, will make the function run on page load!!!
function handleClick(){
    console.log('IT GOT CLICKED!!!');  
}
const hooray = () => console.log('Hooray!!!');
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// NOTE YOU CANNOT REMOVE ANONYMOUS FUNCTIONS
// butts.removeEventListener('click', handleClick);
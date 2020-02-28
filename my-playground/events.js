console.log('Events!');
const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
// Not ideal, as this is an anonymous function and cannot be removed (unbind).
// butts.addEventListener('click', function() {
//   console.log(`butts got clicked!!!`);
// });

// Note we do not add the () after the function, as we are only passing a reference. We do not want to run it yet. The browser will only run it once the event has taken place.
butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);
// function hooray() {
//   console.log('Hooray!!!');
// }
const hooray = () => console.log('Hooray!!!');
function handleClick() {
  console.log('Butts got clicked again');
}

// butts.removeEventListener('click', handleClick);
butts.addEventListener('click', hooray);

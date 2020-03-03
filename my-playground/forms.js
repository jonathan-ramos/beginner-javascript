// .preventDefault();
// window.location
// event.currentTarget.href;
// confrim dialog
// you can query form fields directly as long as they have a 'name' attribute.
// event.currentTarget.value to obtain a form field value
// keyup = value after the key has been pressed
// keydown = value before the key has been presses
// focus
// blur
// buttons are used for actions that happen inside an application
// links are used to change a page

console.log('forms js works!');
const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  console.log('You clicked it!!');
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to continue?'
  );
  //   event.preventDefault();
  //   console.log(shouldChangePage);
  //   if (shouldChangePage) {
  //     window.location = event.currentTarget.href;
  //   }
  //   Alternative and better solution
  if (!shouldChangePage) {
    event.preventDefault();
    console.log('Good. You avoided a trap');
  }
});

const signupForm = document.querySelector('[name="signup"]');
console.log(signupForm);
signupForm.addEventListener('submit', function(e) {
  console.log(e);
  // NOTE THAT WHILE YOU CAN RUN A QUERYSELECTOR TO GET THE FIELDS, A MORE EFFICIENT WAY IS TO JUST GET THE FIELD VALUES DIRECTLY AS LONG AS THE FORM ELEMENTS HAVE A 'NAME ATTRIBUTE'.
  //   console.log(e.currentTarget.name.value);
  //   console.log(e.currentTarget.email.value);
  //   console.log(e.currentTarget.agree.checked);

  const name = event.currentTarget.name.value;
  console.log(name);
  if (name.includes('chad')) {
    console.log('sorry bro!');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');
console.log(photo);

function handlePhotoClick(event) {
    if(event.type === 'click' || event.key === 'Enter') {
        console.log(event.currentTarget);
        console.log(event.key);
        console.log("You clicked the photo");
    }
}
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
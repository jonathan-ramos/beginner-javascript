// console.log(e.target); .target is the actual element clicked on
// console.log(e.currentTarget); .currentTarget is the element to the left of the addEventListener
// .currentTarget is important in order to get whatever element initiated the event.
// Modal window example
// if (event.key === 'Escape'); Listen for Escape key.
// .dataset.data-attribute
// .textContent;
// .src
// .replace();

console.log('Click outside js works!');
const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
function showModal(e) {
  console.log('modal is open');
}
function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  console.log('Clicked!');
  console.log(button);
  console.log(card);
  console.log(imgSrc);
  console.log(desc);
  // populate the modal with the new info
  const html = `
    <image src="${imgSrc.replace('200', '600')}" alt="${name}" />
    <p>${desc}</p>
  `;
  modalInner.innerHTML = html;
  showModal();
}
function showModal() {
    modalOuter.classList.add('open');
}
function closeModal() {
  modalOuter.classList.remove('open');
}
cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  //   console.log(e.target); .target is the actual element clicked on
  //   console.log(e.currentTarget); .currentTarget is the element to the left of the addEventListener
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    console.log('escape key clicked');
    closeModal();
  }
});

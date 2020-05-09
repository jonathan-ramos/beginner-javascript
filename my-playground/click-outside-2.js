const cards = document.querySelector('.cards');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const cardButtons = document.querySelectorAll('.card button');
function handleCardButtonClick(e) {
  console.log('click');
  const card = e.currentTarget.closest('.card');
  console.log(card);
  const desc = card.dataset.description;
  const name = card.querySelector('h2').innerHTML;
  const imgSrc = card.querySelector('img').src;
  console.log(desc, name, imgSrc);

  const myHTML = `
    <img src="${imgSrc.replace('200', '600')}" width="600" alt="${name}">
    <p>${desc}</p>
  `;
  // Show modal;
  // Create the HTML contents
  // Append the HTML to the Modal inner
  modalOuter.classList.add('open');
  modalInner.innerHTML = myHTML;
}
cardButtons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});

function closeModal() {
  modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', function(e) {
  console.log(e.target);
  const isOutside = !e.target.closest('.modal-inner');
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

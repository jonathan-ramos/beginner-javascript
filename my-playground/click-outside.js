console.log('Click outside js works!')

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
console.log(cardButtons);
function handleButtonClick(e){
    console.log('clicked')
    const button = e.currentTarget;
    const card = button.closest('.card');
    console.log(card);
    const imgSrc = card.querySelector('img').src;
    console.log(imgSrc);
    const description = card.dataset.description;
    console.log(description);
    modalInner.innerHTML = `
    
    `
}


cardButtons.forEach(button => button.addEventListener('click', handleButtonClick));
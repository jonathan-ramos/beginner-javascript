// Summary
// .children
// .firstElementChild
// .lastElementChild
// .previousElementSibling
// .nextElementSibling
// .parentElement
// Its possible to combine the selector parentElement.parentElement.children[0].nextElementSibling, but its NOT RECOMMENDED as elements can be later on added to your html. Better use querySelector or closest
// .style="background:red"
// .remove()

console.log('It works');
const wes = document.querySelector('.wes');

console.log(wes);
// Children are all elements or tags within the parent
console.log(wes.children);
// Nodes are everything within that parent, including text elements not wrapped in tags
console.log(wes.childNodes);

// METHODS FOR SELECTING ELEMENTS
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// METHODS FOR SELECTING NODES
console.log(wes.childNodes);
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

// REMOVING ELEMENTS
const item = document.querySelector('.item2');
item.style = 'background:red';
item.remove();

const p = document.createElement('p');
p.textContent = `I will be removed`;
document.body.insertAdjacentElement('afterbegin', p);
p.remove();
console.log(p);
document.body.appendChild(p);

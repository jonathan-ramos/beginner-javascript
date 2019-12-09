console.log('functions works!!!');

// FUNCTION DEFINITION
function calculateBill(billAmount, taxRate = 0.15, tipRate = 0.15) {
  console.log(billAmount, taxRate, tipRate);
  console.log(`Running Caculate Bill`);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

function doctorize(name) {
  return `Dr. ${name}`;
}

// NOTE: ADD A DEFAULT VALUE
function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

doctorize('Jon');
console.log(yell(doctorize('jon')));

const myBill4 = calculateBill(100, undefined, 0.2);

let numOne = [];
let numTwo = [];
let temp = [];
let operator = ['add', 'subtract', 'multiply', 'divide'];
let operation = [];
const operationDisplay = document.querySelector('.operationDisplay')
const solutionDisplay = document.querySelector('.solutionDisplay');
const numberButtons = document.querySelectorAll('.numerical');
const operatorButtons = document.querySelectorAll('.operator');

// Create operator functions.

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    if (operator === "add") return add(a, b);
    if (operator === "subtract") return subtract(a, b);
    if (operator === "multiply") return multiply(a, b);
    if (operator === "divide") return divide(a, b);
}

// Button event listener
numberButtons.forEach(button => button.addEventListener('click', () => {
    temp.push(button.getAttribute("value"));
    solutionDisplay.textContent = temp.join('');
    console.log('numOne: ' + numOne, 'temp: ' + temp);
}))

operatorButtons.forEach(button => button.addEventListener('click', () => {
    changeVar(temp);
    operation.push(button.textContent);
    operationDisplay.textContent = `${numOne.join('')} ${operation} ${numTwo.join('')}`;
    operation.splice(0);
}))

function changeVar(item) {
    if (numOne.length) {
        numTwo = numTwo.concat(item);
        item.splice(0)
        console.log('numTwo:' + numTwo)
    }
    numOne = numOne.concat(item);
    item.splice(0);
}

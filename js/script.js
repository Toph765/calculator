let numOne;
let numTwo;
let operator = ['add', 'subtract', 'multiply', 'divide'];
let displayInput = [];
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numerical');
const operatorButtons = document.querySelectorAll('.operator')

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
    displayInput.push(button.getAttribute("value"));
    display.textContent = displayInput.join('');
}))

operatorButtons.forEach(button => button.addEventListener('click', () => {
    displayInput.push(button.getAttribute("value"));
    display.textContent = displayInput.join('');
}))
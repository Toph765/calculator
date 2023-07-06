let numOne;
let numTwo;
let operator;
let screen = [];
const display = document.querySelector('.display');
const numberButton = document.querySelectorAll('.numerical');

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
numberButton.forEach(button => button.addEventListener('click', () => {
    screen.push(button.getAttribute("value"));
    display.textContent = screen.join('');
}))


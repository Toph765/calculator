let numOne = [];
let numTwo = [];
let temp = [];
let answer = [];
let operation = '';
const operationDisplay = document.querySelector('.operationDisplay')
const solutionDisplay = document.querySelector('.solutionDisplay');
const numberButtons = document.querySelectorAll('.numerical');
const operatorButtons = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

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
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
}

// Button event listener
numberButtons.forEach(button => button.addEventListener('click', () => {
    temp.push(button.getAttribute("value"));
    solutionDisplay.textContent = temp.join('');
}))

operatorButtons.forEach(button => button.addEventListener('click', () => {
    changeVar(temp);
    operation = button.textContent;
    operationDisplay.textContent = `${numOne.join('')} ${operation}`;
    console.log('numOne: ' + numOne + typeof numOne, ', numTwo: ' + numTwo + typeof numTwo ,', operator: ' + operation);
}))

equal.addEventListener('click', function() {
    if (numOne.length) {
        numTwo = numTwo.concat(temp);
        temp.splice(0);
    }
    operationDisplay.textContent = `${numOne.join('')} ${operation} ${numTwo.join('')} =`;
    solutionDisplay.textContent = operate(parseInt(numOne.join('')), parseInt(numTwo.join('')), operation);
    clearVar();
    console.log('numOne: ' + numOne + typeof numOne, ', numTwo: ' + numTwo + typeof numTwo ,', operator: ' + operation);
})

clear.addEventListener('click', () => {
    clearVar();
    clearDisplay();
});


// Functions
function changeVar(item) {
    if (numOne.length) {
        numTwo = numTwo.concat(item);
        item.splice(0);
    }
    numOne = numOne.concat(item);
    item.splice(0);
}

function clearVar() {
    numOne = [];
    numTwo = [];
    temp = [];
    operation = '';
}

function clearDisplay() {
    operationDisplay.textContent = '';
    solutionDisplay.textContent = '';
}

// CHECKER
    /* console.log('numOne: ' + numOne, (typeof numOne));
    console.log('numTwo: ' + numTwo, (typeof numTwo));
    console.log('numOne: ' + numOne + typeof numOne, ', numTwo: ' + numTwo + typeof numTwo ,', operator: ' + operation); */

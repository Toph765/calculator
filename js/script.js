let numOne = [];
let numTwo = [];
let temp = [];
let operation = '';
let operator = '';
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
    if (operator === "add") return add(a, b);
    if (operator === "subtract") return subtract(a, b);
    if (operator === "multiply") return multiply(a, b);
    if (operator === "divide") return divide(a, b);
}

// Button event listener
numberButtons.forEach(button => button.addEventListener('click', () => {
    temp.push(button.getAttribute("value"));
    solutionDisplay.textContent = temp.join('');
}))

operatorButtons.forEach(button => button.addEventListener('click', () => {
    changeVar(temp);
    operator = button.getAttribute('value');
    operation = button.textContent;
    operationDisplay.textContent = `${numOne} ${operation}`;
    console.log('numOne: ' + numOne, (typeof numOne));
    console.log('numOne: ' + numOne, 'numTwo: ' + numTwo,'operator: ' + operator);
}))

equal.addEventListener('click', function() {
    if (numOne.length) {
        numTwo = numTwo.concat(temp);
        temp.splice(0);
        console.log('numTwo: ' + numTwo, (typeof numTwo));
        console.log('numOne: ' + numOne, 'numTwo: ' + numTwo,'operator: ' + operator);
    }
    operationDisplay.textContent = `${numOne} ${operation} ${numTwo} =`;
    solutionDisplay.textContent = operate(parseInt(numOne.join('')), parseInt(numTwo.join('')), operator);
})

clear.addEventListener('click', clearVar);


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
    operator = '';
    operation = '';
    operationDisplay.textContent = '';
    solutionDisplay.textContent = '';
    console.log(typeof numOne, typeof numTwo, typeof operator)
    console.log(numOne, numTwo)
}

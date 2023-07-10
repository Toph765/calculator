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
    if (operator === "x") return multiply(a, b);
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
    if (numOne.length) {
        numTwo = numTwo.concat(temp);
        temp.splice(0);
    }
    if (numOne.length && numTwo.length) {
        answer.push(operate(parseInt(numOne.join('')), parseInt(numTwo.join('')), operation));
        solutionDisplay.textContent = answer[answer.length - 1];
    }
    if (answer.length) {}
}))

equal.addEventListener('click', function() {
    if (numOne.length) {
        numTwo = numTwo.concat(temp);
        temp.splice(0);
    }
    execute();
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
    answer = [];
    operation = '';
}

function clearDisplay() {
    operationDisplay.textContent = '';
    solutionDisplay.textContent = '';
}

function execute() {
    operationDisplay.textContent = `${numOne.join('')} ${operation} ${numTwo.join('')} =`;
    answer.push(operate(parseInt(numOne.join('')), parseInt(numTwo.join('')), operation));
    solutionDisplay.textContent = answer[answer.length - 1];
}

// CHECKER
    /* console.log('numOne: ' + numOne, (typeof numOne));
    console.log('numTwo: ' + numTwo, (typeof numTwo));
    console.log('numOne: ' + numOne + typeof numOne, ', numTwo: ' + numTwo + typeof numTwo ,', operator: ' + operation); */

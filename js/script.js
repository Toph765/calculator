let numOne = [];
let numTwo = [];
let temp = [];
let answer = [];
let operation = [];
const operationDisplay = document.querySelector('.operationDisplay')
const solutionDisplay = document.querySelector('.solutionDisplay');
const numberButtons = document.querySelectorAll('.numerical');
const operatorButtons = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

// Create operator functions.

const add = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const multiply = (a, b) => {return a * b};
const divide = (a, b) => {return a / b};

function operate(a, b, operator) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "x") return multiply(a, b);
    if (operator === "/") return divide(a, b);
}

// EVENT LISTENERS
numberButtons.forEach(button => button.addEventListener('click', () => {
    temp.push(button.textContent);
    solutionDisplay.textContent = temp.join('');
}))

operatorButtons.forEach(button => button.addEventListener('click', () => {
    changeVar(temp);
    operation = operation.concat(button.textContent);
    operationDisplay.textContent = `${numOne.join('')} ${operation[operation.length - 1]}`;
    if (numOne.length && numTwo.length) {
        answer.push(operate(parseInt(numOne.join('')), parseInt(numTwo.join('')), operation[operation.length - 2]));
        solutionDisplay.textContent = answer[answer.length - 1];
    }
    if (answer.length) {
        numOne = [];
        numTwo = [];
        numOne = numOne.concat(answer[answer.length - 1]);
        operationDisplay.textContent = `${numOne[numOne.length - 1]} ${operation[operation.length - 1]}`;
    }
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


// FUNCTIONS
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
    operation = [];
}

function clearDisplay() {
    operationDisplay.textContent = '';
    solutionDisplay.textContent = '';
}

function execute() {
    operationDisplay.textContent = `${numOne.join('')} ${operation[operation.length - 1]} ${numTwo.join('')} =`;
    answer.push(operate(parseInt(numOne.join('')), parseInt(numTwo.join('')), operation[operation.length - 1]));
    solutionDisplay.textContent = answer[answer.length - 1];
}

// CHECKER
    /* console.log('numOne: ' + numOne, (typeof numOne));
    console.log('numTwo: ' + numTwo, (typeof numTwo));
    console.log('numOne: ' + numOne + ' ' + typeof numOne, ', numTwo: ' + numTwo + ' ' +  typeof numTwo ,', operator: ' + operation); */

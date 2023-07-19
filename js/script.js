let numOne = [];
let numTwo = [];
let temp = [0];
let answer = [];
let operation = [];

const operationDisplay = document.querySelector('.operationDisplay')
const solutionDisplay = document.querySelector('.solutionDisplay');
const numberButtons = document.querySelectorAll('.numerical');
const operatorButtons = document.querySelectorAll('.operator');
const point = document.querySelector('.point');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backSpace = document.querySelector('.backspace');
const percentage = document.querySelector('.percentage');

solutionDisplay.textContent = [temp]

const add = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const multiply = (a, b) => {return a * b};
const divide = (a, b) => {
    if (b === 0) {
        alert(`I don't have enough braincells to compute this!`);
        clearVar();
        clearDisplay();
    }
    return a / b;};

function operate(a, b, operator) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "x") return multiply(a, b);
    if (operator === "/") return divide(a, b);
}

// EVENT LISTENERS
operatorButtons.forEach(button => button.addEventListener('click', () => {inputOperator(button)}));
numberButtons.forEach(button => button.addEventListener('click', () => {inputNumber(button)}));
point.addEventListener('click', addPoint);
equal.addEventListener('click', evaluate);
clear.addEventListener('click', clearAll);
backSpace.addEventListener('click', backspace);
percentage.addEventListener('click', evaluatePercentile);

// KEYBOARD FUNCTIONALITY

window.addEventListener('keydown', handleKeyboard);

// FUNCTIONS
function findPercentage(a) {
    return a / 100;
}

function evaluatePercentile() {
    if (answer.length) {
        let percent = findPercentage(answer[answer.length - 1]);
        answer = answer.concat(percent);
        solutionDisplay.textContent = percent
    } else if (numOne.length && !operation.length) {evalPercentVar(numOne)} 
    else if (numOne.length && operation.length && !numTwo.length) {evalPercentVar(numTwo)} 
    else if (numTwo.length) {evalPercentVar(numTwo)} 
    else { evalPercentVar(numOne)};
}


function evalPercentVar(array) {
    let percent;
    if (temp.length) {
        percent = findPercentage(temp.join(''));
        array.push(percent);
        temp.splice(0);
    } else {
        percent = findPercentage(array[array.length - 1]);
        array.push(percent);
        array.splice(0, array.length - 1);
    }
    solutionDisplay.textContent = array[0];
}

function changeVar(item) {
    if (numOne.length) {
        numTwo = numTwo.concat(item);
        item.splice(0);
    }
    numOne = numOne.concat(item);
    item.splice(0);
}

function addPoint() {
    if (temp.includes('.')) return;
    temp.push(point.textContent);
    solutionDisplay.textContent = temp.join('');
}

function turnToNumber(array) {
    return parseFloat(array.join(''));
}

function clearVar() {
    numOne = [];
    numTwo = [];
    temp = [0];
    operation = [];
}

function clearDisplay() {
    operationDisplay.textContent = '';
    solutionDisplay.textContent = temp;
}

function clearAll() {
    clearVar();
    clearDisplay();
    answer = [];
}

function backspace() {
    if (temp[0] === 0) return;
    temp.pop();
    solutionDisplay.textContent = temp.join('');
}

function executeOperation() {
    operationDisplay.textContent = `${numOne.join('')} ${operation[operation.length - 1]} ${numTwo.join('')} =`;
    answer.push(Math.round(operate(turnToNumber(numOne), turnToNumber(numTwo), operation[operation.length - 1]) * (100000 ** 2)) / (100000 ** 2));
    solutionDisplay.textContent = answer[answer.length - 1];
}

function inputNumber(button) {
    if (temp[0] === 0 && temp.length === 1) temp.splice(0);
    if (answer.length) answer = [];
    temp.push(button.textContent);
    solutionDisplay.textContent = temp.join('');
}

function inputOperator(button) {
    changeVar(temp);
    operation = operation.concat(button.textContent);
    operationDisplay.textContent = `${numOne.join('')} ${operation[operation.length - 1]}`;
    if (numOne.length && numTwo.length) {
        answer.push(Math.round(operate(turnToNumber(numOne), turnToNumber(numTwo), operation[operation.length - 2]) * (100000 ** 2)) / (100000 ** 2));
        solutionDisplay.textContent = answer[answer.length - 1];
    }
    if (answer.length) {
        numOne = [];
        numTwo = [];
        numOne = numOne.concat(answer[answer.length - 1]);
        operationDisplay.textContent = `${numOne[numOne.length - 1]} ${operation[operation.length - 1]}`;
    }
}

function evaluate() {
    if (temp.length && numOne.length) {
        numTwo = numTwo.concat(temp);
        temp.splice(0);
    }
    if (!numTwo.length) return;
    executeOperation();
    clearVar();
}

function handleKeyboard(event) {
    const numButton = document.querySelector(`.numerical[data-key='${event.code}']`);
    const opButton = document.querySelector(`.operator[data-key='${event.code}']`);
    if (event.key >= 0 && event.key <= 9) inputNumber(numButton);
    if (event.key === '=' || event.key === 'Enter') evaluate();
    if (event.key === '.') addPoint();
    if (event.key === 'Escape') clearAll();
    if (event.key === 'Backspace') backspace();
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/')
    inputOperator(opButton);
}
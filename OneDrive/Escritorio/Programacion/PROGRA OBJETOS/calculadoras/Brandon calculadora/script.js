let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = operate(operator, firstOperand, parseFloat(currentInput));
    }
    operator = op;
    currentInput = '';
    display.value = firstOperand + " " + operator;
}

function calculateResult() {
    if (operator === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    display.value = operate(operator, firstOperand, secondOperand);
    firstOperand = null;
    operator = null;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '';
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}

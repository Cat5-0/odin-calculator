let firstNumber;
let secondNumber;
let step = 0;
let result = 0;
let operation;
let rollingResult;

// Number arrays for first and second input numbers
let numArray = [];
let secondNumArray = [];

let display = document.getElementById('display');

function getNumber(num) {
    if (step === 0 || step === 1) {
        numArray.push(num); // [1, 2, 5]
        step = 1;
        firstNumber = Number(numArray.join('')); // merge into one string
        display.value = firstNumber;

    } else if (step === 2) {
        secondNumArray.push(num);
        secondNumber = Number(secondNumArray.join(''));
        display.value = secondNumber;
    }
}

function getOperator(operator) {
    // If there is already a second number, calculate first
    if (step === 2 && secondNumArray > 0) {
        // evaluate previous pair
        operate();
    }
    operation = operator;
    step = 2; // ready for next number
    secondNumArray = [];
}

// helper function: performs current operation
function operate() {
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === 'x') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    }
    if (result !== null) {
        display.value = result;
        firstNumber = result; // rolling result becomes next number
        secondNumber = null;
    }
}

// If there is already a second number, calculate first
function getEquals() {
    if (secondNumArray.length > 0) {
        operate();
    }
    step = 1; // result ready to use as firstNumber
}

function clearDisplay() {
    // console.log("clear display");
    display.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0;
    operation = null;
    result = 0;
    numArray = [];
    secondNumArray = [];
}

function getDecimal() {
    // Act same as entering "."
    getNumber('.');
}

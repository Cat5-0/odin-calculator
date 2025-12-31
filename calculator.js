// 1. press first number - save first number
// 2. press operator - save operator
// 3. press second number - save second number
// 4. press equal sign - make calculation
// Keep track of all steps using let step
// Keep track of result
// Keep track of numbers in an array for first and
// separate for second number

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
    // console.log(num);
    // display.value = num; to display number
    // step 0 and step 1 for 
    if (step === 0 || step === 1) {
        numArray.push(num); // [1, 2, 5]
        step = 1;
        firstNumber = Number(numArray.join('')); // merge into one string
        display.value = firstNumber;
        console.log(`${firstNumber} line 31`)
    } else if (step === 2) {
        secondNumArray.push(num);
        secondNumber = Number(secondNumArray.join(''));
        display.value = secondNumber;
        console.log(`${secondNumber} line 36`)
        rollingResult = firstNumber + secondNumber;
        console.log(`${rollingResult} rollingResult`);
    }
}

function getOperator(operator) {
    console.log(operator);
    step = 2;
    operation = operator;
}

function getSymbol(symbol) {
    console.log(symbol);
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

function getEquals() {
    // console.log("calculate equals")    
    if (operation === '+') {
        result = firstNumber + secondNumber;
        rollingResult = result;
        console.log(`${result} firstNumber + secondNumber`);
        console.log(`${rollingResult} rollingResult`);
        display.value = result;
        firstNumber = result;
        secondNumber = null;
        numArray = [];
        secondNumArray = [];

    } else if (operation === '-') {
        console.log(`${operator} before minus`);
        result = firstNumber - secondNumber;
        display.value = result;
        firstNumber = result;
        secondNumber = null;
        numArray = [];
        secondNumArray = [];
    } else if (operation === 'x') {
        result = firstNumber * secondNumber;
        display.value = result;
        firstNumber = result;
        secondNumber = null;
        numArray = [];
        secondNumArray = [];
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
        display.value = result;
        firstNumber = result;
        secondNumber = null;
        numArray = [];
        secondNumArray = [];
    }
}

// Just added rollingResult line 38
// looking to use this result as an if condition before
// line 66 where calculation begins to allow operator using total to continue
// the sum 12 + 7 - 1 = 19
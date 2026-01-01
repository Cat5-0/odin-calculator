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
        // Build first number to include ','
        if (num === '.' && numArray.includes('.')) return; // prevent multiple decimals
        numArray.push(num); // [1, 2, 5]
        step = 1;
        firstNumber = Number(numArray.join('')); // merge into one string
        display.value = firstNumber;

    } else if (step === 2) {
        // Build second number to include ','
        if (num === '.' && secondNumArray.includes('.')) return; // prevent multiple decimals
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
    if (firstNumber === null || secondNumber === null || operation === null) return;

    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === 'x' || operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    }

    // format the result before displaying
    result = formatResult(result);
        display.value = result;
        firstNumber = Number(result); // rolling result becomes next number
        secondNumber = null;
        numArray = [String(result)];
        secondNumArray = [];
        step = 1; // ready for next operator 
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

function formatResult(num) {
  // Handle division by zero or invalid numbers
  if (!isFinite(num)) return 'Error';

  // If it's effectively an integer (like 5.0000)
  if (Math.abs(num - Math.round(num)) < 1e-10) {
    return Math.round(num);
  }

  // For fractional numbers, keep up to 8 significant digits total
  return parseFloat(num.toPrecision(8));
}

// === OPTIONAL: KEYBOARD SUPPORT ===
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key)) {
    getNumber(key);
  } else if (['+', '-', '*', '/', 'x'].includes(key)) {
    getOperator(key);
  } else if (key === '.') {
    getDecimal();
  } else if (key === 'Enter' || key === '=') {
    getEquals();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Backspace') {
    // Handle deleting last digit of current input
    if (step === 2 && secondNumArray.length > 0) {
      secondNumArray.pop();
      secondNumber = Number(secondNumArray.join('') || 0);
      display.value = secondNumArray.join('') || 0;
    } else if (numArray.length > 0) {
      numArray.pop();
      firstNumber = Number(numArray.join('') || 0);
      display.value = numArray.join('') || 0;
    }
  }
});


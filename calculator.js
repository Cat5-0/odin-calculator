// Object values
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

// Update Display
const updateDisplay = () => {
    const display = document.querySelector('.screen');
    display.value = calculator.displayValue;
};
updateDisplay();

// Function key press
const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
    const {target} = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clearDisplay')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

// Input Digit
const inputDigit = (digit) => {
    const {displayValue, waitingForSecondOperand} = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = 
        displayValue === '0' ? digit : displayValue + digit;
    }
};

// start Wednesday Input Decimal 23:57

// Input Decimal
let numb1 = 0;
let numb2 = 0;
let operator = "";

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function operate(operator, numb1, numb2) {
    switch (operator) {
        case '+':
            return add(numb1, numb2);
        case '-':
            return subtract(numb1, numb2);
        case 'x':
            return multiply(numb1, numb2);
        case '/':
            return divide(numb1, numb2);
        default:
            return "Invalid operator";
    }
}

function add(a, b) {
    return a + b;
}
console.log("Add", add(1, 2));

function subtract(c, d) {
    return c - d;
}
console.log("Subtract", subtract(10, 56));

function multiply(e, f) {
    return e * f;
}
console.log("Multiply", multiply(5, 7));

function divide(g, h) {
    if (h === 0) {
        return "Cannot divide by zero";
    }
    return g / h;
}
console.log("Divide", (25, 5));
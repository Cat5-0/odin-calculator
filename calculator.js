const buttonValues = [
    "C", "+/-", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-", 
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["/", "x", "-", "+", "="];
const topSymbols = ["C", "+/-", "%"]; // modify..ers

const display = document.getElementById("display");

// a + b, a x b, a - b, a / b Pseudocode .25
let a = 0;
let operator = null;
let b = null;
display.value = "0";

function clearAll() {
    a = 0;
    operator = null;
    b = null;
}


for (let i = 0; i < buttonValues.length; i++) {
    // adding button names from array .11
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    // style button colors Pseudocode .18
    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500";
    }
    else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    // process button clicks
    button.addEventListener("click", function() {
        if (rightSymbols.includes(value)) {
            if (value === "=") {
                if (a != null) {
                    b = display.value;
                    let numA = Number(a);
                    let numB = Number(b);

                    if (operator === "/") {
                        if (numB === 0) {
                            display.value = "Dummy";
                        } else {
                        display.value = numA.toFixed(7) / numB.toFixed(7);
                        }
                    } else if (operator === "x") {
                        display.value = numA * numB;
                    } else if (operator === "-") {
                        display.value = numA - numB;
                    } else if (operator === "+") {
                        display.value = numA + numB;
                    }
                }
                clearAll();
            } else {
                operator = value;
                a = display.value;
                display.value = "";
            }

        } else if (topSymbols.includes(value)) {
            if (value === "C") {
                clearAll();
                display.value = "0";
            } else if (value === "+/-") {
                if (display.value != "" && display.value != "0") {
                    if (display.value[0] === "-") {
                        display.value = display.value.slice(1);
                    } else {
                        display.value = "-" + display.value;
                    }
                    
                }
            } else if (value === "%") {
                display.value = Number(display.value)/100;
            }

        } else { // numbers or .
            if (value === ".") {
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            } else if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }
        }
        
    })

    // add buttons to buttons div .12
    document.getElementById("buttons").appendChild(button);
} 


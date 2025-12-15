const buttonValues = [
    "C", "+/-", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-", 
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["/", "x", "-", "+", "="];
const topSymbols = ["C", "+/-", "%"];


for (let i = 0; i < buttonValues.length; i++) {
    // adding button names from array
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    // style button colors Pseudocode .18
     

    // add buttons to buttons div 
    document.getElementById("buttons").appendChild(button);
} 


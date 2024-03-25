let total = 0;
let firstNum = 0;
let secondNum = 0;
let firstNumPressed = false;
let operationButtonPressed = false;
let currentOperation = "undefined";

// This will be used by the = button to display the answer
function displayAnswer() {
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    console.log("operationButtonPressed: " + operationButtonPressed)
    if (firstNumPressed === true && operationButtonPressed === true) {
        if (currentOperation === "addition") {
            document.getElementById("answer").textContent = add(firstNum, secondNum);
            firstNumPressed = false;
            operationButtonPressed = false;
            console.log("STEP TWO!");
        } else if (currentOperation === "subtraction") {
            document.getElementById("answer").textContent = subtract(firstNum, secondNum);
            firstNumPressed = false;
            operationButtonPressed = false;
        } else if (currentOperation === "division") {
            document.getElementById("answer").textContent = divide(firstNum, secondNum);
            firstNumPressed = false;
            operationButtonPressed = false;
        } else if (currentOperation === "multiplication") {
            document.getElementById("answer").textContent = multiply(firstNum, secondNum);
            firstNumPressed = false;
            operationButtonPressed = false;
        } else {
            console.log("Invalid operation expressed in function displayAnswer(x, op).")
        }
    }
}

function setCurrentOperation(op) {
    currentOperation = op;
    operationButtonPressed = !operationButtonPressed;
    console.log(op)
}


function displayNum(x) {
    console.log("firstNumPressed: " + firstNumPressed);
    console.log("operationButtonPressed: " + operationButtonPressed);
    if (firstNumPressed === true && operationButtonPressed === true) {
        secondNum = x;
        console.log("secondNum: " + secondNum);
    } else {
        firstNum = x;
        firstNumPressed = !firstNumPressed;
        console.log("firstNum: " + firstNum);
    }
    document.getElementById("answer").textContent = x;
}


function allClear() {
    document.getElementById("answer").textContent = "0";
    firstNumPressed = !firstNumPressed;
    operationButtonPressed = !operationButtonPressed;
    currentOperation = "undefined";
    firstNum = 0;
    secondNum = 0;
    total = 0;
}

// Functions for basic arithmetic of calculator
function add(x, y) {
    return Number(x) + Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function divide(x, y) {
    return Number(x) / Number(y);
}
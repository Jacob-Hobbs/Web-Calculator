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
    if (firstNumPressed === true && operationButtonPressed === true) {
        if (currentOperation === "addition") {
            document.getElementById("answer").textContent = add(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            console.log("STEP TWO!");
        } else if (currentOperation === "subtraction") {
            document.getElementById("answer").textContent = subtract(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
        } else if (currentOperation === "division") {
            document.getElementById("answer").textContent = divide(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
        } else if (currentOperation === "multiplication") {
            document.getElementById("answer").textContent = multiply(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
        } else {
            console.log("Invalid operation expressed in function displayAnswer(x, op).")
        }
    }

}

function setCurrentOperation(op) {
    if (firstNumPressed === true) {
        currentOperation = op;
        operationButtonPressed = !operationButtonPressed;
        console.log(op)
    }
}

function displayNum(x) {
    // conditions for second number of operation
    if (firstNumPressed === true && operationButtonPressed === true) {
        secondNum = Number(x);
        document.getElementById("answer").textContent = secondNumNum;
    // conditions for first number of operation
    } else {
        // TODO: will need to change this when implementing decimals
        console.log("firstNumPressed: " + firstNumPressed)
        if (firstNumPressed === true) {
            firstNum = Number(firstNum + x);
            document.getElementById("answer").textContent = firstNum;
        } else {
            firstNum = Number(x);
            firstNumPressed = !firstNumPressed;
            document.getElementById("answer").textContent = firstNum;
        }
    }
}

function percent() {
    let enteredNum = Number(firstNum);
    enteredNum = enteredNum * 0.01;
    firstNum = Number(enteredNum);
    document.getElementById("answer").textContent = enteredNum.toString();
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

function negPos() {
    if (Number(firstNum) >= 0) {
        firstNum = Number(firstNum * -1);
    } else {
        firstNum = Math.abs(Number(firstNum));
    }
    document.getElementById("answer").textContent = firstNum;
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
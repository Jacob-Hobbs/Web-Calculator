let total = 0;
let firstNum = 0;
let secondNum = 0;
let firstNumPressed = false;
let secondNumPressed = false;
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
            secondNumPressed = !secondNumPressed;
        } else if (currentOperation === "subtraction") {
            document.getElementById("answer").textContent = subtract(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            secondNumPressed = !secondNumPressed;
        } else if (currentOperation === "division") {
            document.getElementById("answer").textContent = divide(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            secondNumPressed = !secondNumPressed;
        } else if (currentOperation === "multiplication") {
            document.getElementById("answer").textContent = multiply(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            secondNumPressed = !secondNumPressed;
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
// TODO: will need to change this when implementing decimals
function displayNum(x) {
    // conditions for second number of operation
    if (firstNumPressed === true && operationButtonPressed === true) {
        // if the second number already has a ones digit.
        if (secondNumPressed === true) {
            secondNum = Number(secondNum + x);
            document.getElementById("answer").textContent = secondNum;
        // else mark x as the second number's ones digit.
        } else {
            secondNum = Number(x);
            secondNumPressed = !secondNumPressed;
            document.getElementById("answer").textContent = secondNum;
        }
    // conditions for first number of operation
    } else {
        // if first number already has ones digit.
        if (firstNumPressed === true) {
            firstNum = Number(firstNum + x);
            document.getElementById("answer").textContent = firstNum;
        // else mark x as the first number's ones digit.
        } else {
            firstNum = Number(x);
            firstNumPressed = !firstNumPressed;
            document.getElementById("answer").textContent = firstNum;
        }
    }
}

function percent() {
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    if (firstNumPressed === true && secondNumPressed === false) {
        let enteredNum = Number(firstNum) * 0.01;
        firstNum = Number(enteredNum);
        document.getElementById("answer").textContent = enteredNum.toString();
    } else if (firstNumPressed === true && secondNumPressed === true) {
        let enteredNum = Number(secondNum) * 0.01;
        secondNum = Number(enteredNum);
        document.getElementById("answer").textContent = enteredNum.toString();
    }
}


function allClear() {
    document.getElementById("answer").textContent = "0";
    if (firstNumPressed === true) {
        firstNumPressed = !firstNumPressed;
    }
    if (secondNumPressed === true) {
        secondNumPressed = !secondNumPressed;
    }
    if (operationButtonPressed === true) {
        operationButtonPressed = !operationButtonPressed;
    }
    currentOperation = "undefined";
    firstNum = 0;
    secondNum = 0;
    total = 0;
}

function negPos() {
    if (firstNumPressed === true && secondNumPressed === false) {
        if (Number(firstNum) >= 0) {
            firstNum = Number(firstNum * -1);
        } else {
            firstNum = Math.abs(Number(firstNum));
        }
        document.getElementById("answer").textContent = firstNum;
    } else if (firstNumPressed === true && secondNumPressed === true) {
        if (Number(secondNum) >= 0) {
            secondNum = Number(secondNum * -1);
        } else {
            secondNum = Math.abs(Number(secondNum));
        }
        document.getElementById("answer").textContent = secondNum;
    }
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
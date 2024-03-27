let total = 0;
let firstNum = 0;
let secondNum = 0;
let firstNumPressed = false;
let secondNumPressed = false;
let operationButtonPressed = false;
let decimalButtonPressed = false;
let currentOperation = "undefined";

// This function will be used by the . button to place a decimal in the number
function placeDecimal() {
    // if no number is entered for firstNum
    if (firstNumPressed === false) {
        console.log("CONDITION 1");
        firstNum = firstNum + ".";
        document.getElementById("answer").textContent = firstNum;
        firstNumPressed = !firstNumPressed;
        decimalButtonPressed = !decimalButtonPressed;
    // if a number has been entered for firstNum
    } else if (firstNumPressed === true && secondNumPressed === false
            && decimalButtonPressed === false && operationButtonPressed === false) {
        console.log("CONDITION 2");
        firstNum = firstNum + ".";
        document.getElementById("answer").textContent = firstNum;
        decimalButtonPressed = !decimalButtonPressed;
    // if no number has been entered for secondNum
    } else if (firstNumPressed === true && operationButtonPressed === true
            && decimalButtonPressed === false && secondNumPressed === false) {
        console.log("CONDITION 3");
        secondNum = secondNum + ".";
        document.getElementById("answer").textContent = secondNum;
        decimalButtonPressed = !decimalButtonPressed;
        secondNumPressed = !secondNumPressed;
    // if a number has been entered for secondNum
    } else if (firstNumPressed === true && operationButtonPressed === true
        && decimalButtonPressed === false && secondNumPressed === true) {
        console.log("CONDITION 4");
        secondNum = secondNum + ".";
        document.getElementById("answer").textContent = secondNum;
        decimalButtonPressed = !decimalButtonPressed;
    }
}

// This will be used by the = button to display the answer
function displayAnswer() {
    if (firstNumPressed === true && operationButtonPressed === true) {
        if (currentOperation === "addition") {
            document.getElementById("answer").textContent = add(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            secondNumPressed = !secondNumPressed;
            decimalButtonPressed = !decimalButtonPressed;
        } else if (currentOperation === "subtraction") {
            document.getElementById("answer").textContent = subtract(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            secondNumPressed = !secondNumPressed;
            decimalButtonPressed = !decimalButtonPressed;
        } else if (currentOperation === "division") {
            document.getElementById("answer").textContent = divide(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            secondNumPressed = !secondNumPressed;
            decimalButtonPressed = !decimalButtonPressed;
        } else if (currentOperation === "multiplication") {
            document.getElementById("answer").textContent = multiply(firstNum, secondNum);
            firstNumPressed = !firstNumPressed;
            operationButtonPressed = !operationButtonPressed;
            secondNumPressed = !secondNumPressed;
            decimalButtonPressed = !decimalButtonPressed;
        } else {
            console.log("Invalid operation expressed in function displayAnswer(x, op).")
        }
    }

}

function setCurrentOperation(op) {
    if (firstNumPressed === true) {
        currentOperation = op;
        operationButtonPressed = !operationButtonPressed;
        if (decimalButtonPressed === true) {
            decimalButtonPressed = !decimalButtonPressed;
        }
        console.log(op)
    }
}

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
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
}

function percent() {
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
    if (decimalButtonPressed === true) {
        decimalButtonPressed = !decimalButtonPressed;
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
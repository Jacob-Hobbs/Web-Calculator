sum = 0;

function displayNum(x) {
    document.getElementById("answer").textContent = x;
}

function showPlus() {
    document.getElementById("answer").textContent = answer.textContent + "+";
}

function clear() {
    document.getElementById("answer").textContent = answer.textContent + "0";
}
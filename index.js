const button = document.getElementById("button");
const number = document.getElementById("main-number");
let currentNumber = 0;

const numberIncrease = () => {
    number.innerHTML = currentNumber;
    currentNumber = currentNumber + 1;
}

button.addEventListener("click", numberIncrease);
let newNumber = "0"
let savedNumber = ""
let operator = ""
let screen = document.querySelector(".screen p")

// DIGITS AND POINT
function pressDigit(val) {
}
document.querySelectorAll(".digit").forEach(el => el.addEventListener("click", e => pressDigit(e.target.value)))

function pressPoint() {
}
document.querySelector("button[value='.']").addEventListener("click", pressPoint)

// OPERATIONS
function pressPlus() {
}
document.querySelector("button[value='+']").addEventListener("click", pressPlus)

function pressMultiply() {
}
document.querySelector("button[value='*']").addEventListener("click", pressMultiply)

function pressMinus() {
}
document.querySelector("button[value='-']").addEventListener("click", pressMinus)

function pressDivide() {
}
document.querySelector("button[value='/']").addEventListener("click", pressDivide)

function pressEqual() {
}
document.querySelector("button[value='=']").addEventListener("click", pressEqual)

// UTILITIES
function operate() {
}

function saveNumber() {
  savedNumber = newNumber
  newNumber = ""
}
function updateScreen(number) {
  screen.textContent = number
}

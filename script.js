let newNumber = "0"
let savedNumber = ""
let operator = ""
let screen = document.querySelector(".screen p")

// DIGITS AND POINT
function pressDigit(val) {
  if (newNumber === "" || newNumber === "0") {
    newNumber = val
  } else {
    newNumber += val
  }
  updateScreen(newNumber)
}
document.querySelectorAll(".digit").forEach(el => el.addEventListener("click", e => pressDigit(e.target.value)))

function pressPoint() {
  if (newNumber === "" || newNumber === "0") {
    newNumber = "0."
  } else if (!newNumber.includes(".")) {
    newNumber += "."
  }
  updateScreen(newNumber)
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

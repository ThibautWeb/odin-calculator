let newNumber = "0"
let savedNumber = ""
let operator = ""
let screen = document.querySelector(".screen p")

// DIGITS AND POINT
function pressDigit(val) {
  if (newNumber === "0") {
    if (!operator) savedNumber = "0"
    if (val !== "0") {
      newNumber = val
    }
  } else {
     newNumber += val
  }
  updateScreen(newNumber)
}
document.querySelectorAll(".digit").forEach(el => el.addEventListener("click", e => pressDigit(e.target.value)))

function pressPoint() {
  if (!newNumber.includes(".")) {
    console.log(newNumber)
    newNumber += "."
    updateScreen(newNumber)
  }
}
document.querySelector("button[value='.']").addEventListener("click", pressPoint)

// OPERATIONS
function pressPlus() {
  operator = "+"
  operate()
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
  if (!operator) return
  operate()
  operator = ""
}
document.querySelector("button[value='=']").addEventListener("click", pressEqual)

// UTILITIES
function operate() {
  if (operator === "+") savedNumber = +savedNumber + +newNumber
  newNumber = "0"
  updateScreen(savedNumber)
}
function updateScreen(number) {
  screen.textContent = number
}

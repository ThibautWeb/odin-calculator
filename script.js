let newNumber = "0"
let savedNumber = ""
let operator = ""
let screen = document.querySelector(".screen p")

// DIGITS AND POINT
function pressDigit(val) {
  if (newNumber === "0") {
    if (val !== "0") {
      newNumber = val
    }
  } else {
     newNumber += val
  }
  updateScreen()
}
document.querySelectorAll(".digit").forEach(el => el.addEventListener("click", e => pressDigit(e.target.value)))

function pressPoint() {
  if (!newNumber.includes(".")) {
    console.log(newNumber)
    newNumber += "."
    updateScreen()
  }
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
function updateScreen() {
  screen.textContent = newNumber
}

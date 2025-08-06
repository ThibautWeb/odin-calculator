let newNumber = "0"
let savedNumber = ""
let operator = ""
let screen = document.querySelector(".screen p")

// DIGITS AND POINT
let digitButtons = document.querySelectorAll(".digit")
digitButtons.forEach(el => el.addEventListener("click", e => pressDigit(e.target.value)))
function pressDigit(val) {
  if (newNumber === "" || newNumber === "0") {
    newNumber = val
    if (operator === "") {
      savedNumber = ""
    }
  } else {
    newNumber += val
  }
  updateScreen()
}

let pointButton = document.querySelector("button[value='.']")
pointButton.addEventListener("click", pressPoint)
function pressPoint() {
  if (newNumber !== "" && !newNumber.includes(".")) {
    newNumber += "."
    screen.textContent = newNumber
  }
}

// OPERATIONS
let plusButton = document.querySelector("button[value='+']")
plusButton.addEventListener("click", pressPlus)
function pressPlus() {
  operator = "+"
  if (savedNumber === "") {
    transferOperand()
  } else {
    getResult()
    updateScreen()
  }
}

let multiplyButton = document.querySelector("button[value='*']")
multiplyButton.addEventListener("click", pressMultiply)
function pressMultiply() {
  operator = "*"
  if (savedNumber === "") {
    transferOperand()
  } else {
    getResult()// saved number erased here!
    updateScreen()
  }
}

document.querySelector("button[value='-']").addEventListener("click", pressMinus)
function pressMinus() {
}

document.querySelector("button[value='/']").addEventListener("click", pressDivide)
function pressDivide() {
}

document.querySelector("button[value='=']").addEventListener("click", pressEqual)

// UTILITIES
function pressEqual() {
  getResult()
  updateScreen()
  operator = ""
}

function getResult() {
  if (operator === "+") {
    newNumber = +newNumber + +savedNumber
  } else if (operator === "*") {
  console.log(savedNumber + " saved, " + newNumber + " new")
    newNumber = +newNumber * +savedNumber
  console.log(savedNumber + " saved, " + newNumber + " new")
  }
  transferOperand()
}

function transferOperand() {
  savedNumber = newNumber
  newNumber = ""
}

function updateScreen() {
  screen.textContent = newNumber !== "" ? newNumber : savedNumber
}

// let allButtons = document.querySelectorAll("button").forEach(el => el.addEventListener("click", () => console.log(`saved number: ${savedNumber}\nnew number: ${newNumber}\noperator: ${operator}`)))

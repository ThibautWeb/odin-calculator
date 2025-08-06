let newNumber = "0"
let savedNumber = ""
let operator = ""
let screen = document.querySelector(".screen p")

// DIGITS AND POINT
function pressDigit(val) {
  if (newNumber === "" || newNumber === "0") {
    newNumber = val
    if (operator === "") savedNumber = ""
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
  if (newNumber === "" && savedNumber === "") return
  if (newNumber !== "") {
    if (savedNumber !== "") {
      operate()
    } else {
      saveNumber()
    }
  }
  updateScreen(savedNumber)
  operator = "+"
}
document.querySelector("button[value='+']").addEventListener("click", pressPlus)

function pressMinus() {
  if (newNumber === "" && savedNumber === "") return
  if (newNumber !== "") {
    if (savedNumber !== "") {
      operate()
    } else {
      saveNumber()
    }
  }
  updateScreen(savedNumber)
  operator = "-"
}
document.querySelector("button[value='-']").addEventListener("click", pressMinus)

function pressMultiply() {
  if (newNumber === "" && savedNumber === "") return
  if (newNumber !== "") {
    if (savedNumber !== "") {
      operate()
    } else {
      saveNumber()
    }
  }
  updateScreen(savedNumber)
  operator = "*"
}
document.querySelector("button[value='*']").addEventListener("click", pressMultiply)

function pressDivide() {
  if (newNumber === "" && savedNumber === "") return
  if (newNumber !== "") {
    if (savedNumber !== "") {
      operate()
    } else {
      saveNumber()
    }
  }
  updateScreen(savedNumber)
  operator = "/"
}
document.querySelector("button[value='/']").addEventListener("click", pressDivide)

function pressEqual() {
  if (newNumber === "" && savedNumber === "") return
  if (newNumber !== "") {
    if (savedNumber !== "") {
      operate()
    } else {
      saveNumber()
    }
  }
  updateScreen(savedNumber)
  operator = ""
}
document.querySelector("button[value='=']").addEventListener("click", pressEqual)

// UTILITIES
function operate() {
  console.log(operator)
  if (operator === "+") {
    savedNumber = +savedNumber + +newNumber
  } else if (operator === "-") {
    savedNumber = +savedNumber - +newNumber
  } else if (operator === "*") {
    savedNumber = +savedNumber * +newNumber
  } else if (operator === "/") {
    savedNumber = +savedNumber / +newNumber
  }
  savedNumber = savedNumber.toFixed(3)
  newNumber = ""
}

function saveNumber() {
  savedNumber = newNumber
  newNumber = ""
}
function updateScreen(number) {
  screen.textContent = number
}

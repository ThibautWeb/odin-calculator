let rightOperand = "0"
let leftOperand = ""
let operator =""

document.querySelectorAll(".digit")
  .forEach(el => el.addEventListener("click", e => inputDigit(e.target.value)))
function inputDigit(val) {
  if (rightOperand === "" || rightOperand === "0") {
    rightOperand = val
  } else {
    rightOperand += val
  }
  let screen = document.querySelector(".screen p")
  screen.textContent = rightOperand
}

document.querySelector("button[value='.']").addEventListener("click", inputPoint)
function inputPoint() {
  if (rightOperand !== "" && !rightOperand.includes(".")) {
    rightOperand += "."
    let screen = document.querySelector(".screen p")
    screen.textContent = rightOperand
  }
}

document.querySelector("button[value='+']").addEventListener("click", inputPlus)
function inputPlus() {
  console.log("plus")
}
document.querySelector("button[value='-']").addEventListener("click", inputMinus)
function inputMinus() {
  console.log("minus")
}
document.querySelector("button[value='*']").addEventListener("click", inputMultiply)
function inputMultiply() {
  console.log("multiply")
}
document.querySelector("button[value='/']").addEventListener("click", inputDivide)
function inputDivide() {
  console.log("divide")
}
document.querySelector("button[value='=']").addEventListener("click", inputEqual)
function inputEqual() {
  console.log("equal")
}


document.querySelectorAll(".digit").forEach(el => {
  el.addEventListener("click", e => inputDigit(e.target.value))
})

function inputDigit(val) {
  console.log(val)
}

document.querySelector("button[value='.']").addEventListener("click", () => console.log("comma"))
document.querySelector("button[value='+']").addEventListener("click", () => console.log("add"))
document.querySelector("button[value='-']").addEventListener("click", () => console.log("substract"))
document.querySelector("button[value='*']").addEventListener("click", () => console.log("multiply"))
document.querySelector("button[value='/']").addEventListener("click", () => console.log("divide"))
document.querySelector("button[value='=']").addEventListener("click", () => console.log("equal"))

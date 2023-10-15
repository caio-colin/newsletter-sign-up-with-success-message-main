const form = document.getElementById("form")
const setEmail = document.getElementById("set-email")
const inputEmail = document.getElementById("email")
const infoInvalidEmail = document.querySelector(".email.info")
const containers = document.querySelectorAll(".container")

let captureEmail = ""

inputEmail.addEventListener("input", () => {
  if (inputEmail.value.length !== 0) filledInput()
})

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (inputEmail.value.length === 0) {
    emptyInput()
    return
  }
  if (isValidEmail(inputEmail.value)) {
    captureEmail = ` ${inputEmail.value}`
    setEmail.textContent = captureEmail
    
    // Só existe 2 containers e a linha abaixo faz a troca da classe ocult entre eles
    containers.forEach((item) => item.classList.toggle("ocult"))
  } else {
    emptyInput()
    return
  }
})

function filledInput() {
  inputEmail.classList.remove("invalid-email")
  infoInvalidEmail.classList.add("ocult")
}
function emptyInput() {
  inputEmail.classList.add("invalid-email")
  infoInvalidEmail.classList.remove("ocult")
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

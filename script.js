const resultsList = document.getElementById("results")
        new URLSearchParams(window.location.search).forEach((value, name) => {
            resultsList.append(`${name}: ${value}`)
            resultsList.append(document.createElement("br"))
        })

const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
}

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep)
  })
}

multiStepForm.addEventListener("click", e => {
    if (e.target.matches("[data-next]")){
        currentStep += 1
    } else if (e.target.matches("[data-previous]")){
        currentStep -= 1
    } else {
        return
    }
    showCurrentStep()
})
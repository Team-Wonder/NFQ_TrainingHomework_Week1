const dogCtn = document.querySelector("#dog")
const catCtn = document.querySelector("#cat")
const fishCtn = document.querySelector("#fish")

const petSelectionCtn = document.querySelector("#pet-selection-ctn")
const selectedPetCtn = document.querySelector("#selected-pet-ctn")

let pet = {}

function toggleSelectionDisplay() {
    petSelectionCtn.style.display = "none"
    selectedPetCtn.style.display = "flex"
}

dogCtn.addEventListener("click", () => {
    console.log("dog")
    toggleSelectionDisplay()
})

catCtn.addEventListener("click", () => {
    console.log("cat")
    toggleSelectionDisplay()
})

fishCtn.addEventListener("click", () => {
    console.log("fish")
    toggleSelectionDisplay()
})
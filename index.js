import { Dog } from "./Animals/dog"
import { Cat } from "./Animals/cat"
import { Fish } from "./Animals/fish"

const dogCtn = document.querySelector("#dog")
const catCtn = document.querySelector("#cat")
const fishCtn = document.querySelector("#fish")
// const nameCtn = document.querySelector("#name-ctn")
const nameDisplayCtn = document.querySelector("#name-display-ctn")
const nameEditCtn = document.querySelector("#name-edit-ctn")

const petSelectionCtn = document.querySelector("#pet-selection-ctn")
const selectedPetCtn = document.querySelector("#selected-pet-ctn")

const backBtn = document.querySelector("#back-btn")
const nameEditBtn = document.querySelector("#name-edit-btn")
const cancelBtn = document.querySelector("#cancel-btn")

let pet = {}

function toggleSelectionDisplay(cmd) {
    if (cmd === "off") {
        petSelectionCtn.style.display = "none"
        selectedPetCtn.style.display = "flex"
        return;
    }
    
    petSelectionCtn.style.display = "flex"
    selectedPetCtn.style.display = "none"
}

function toggleNameEdit(cmd) {
    if (cmd === "off") {
        nameDisplayCtn.style.display = "block"
        nameEditCtn.style.display = "none"
    }

    nameDisplayCtn.style.display = "none"
    nameEditCtn.style.display = "block"
}

dogCtn.addEventListener("click", () => {
    console.log("dog")
    pet = new Dog()
    toggleSelectionDisplay("off")
})

catCtn.addEventListener("click", () => {
    console.log("cat")
    toggleSelectionDisplay("off")
})

fishCtn.addEventListener("click", () => {
    console.log("fish")
    toggleSelectionDisplay("off")
})

nameEditBtn.addEventListener("click", () => {
    toggleNameEdit("on")
})

cancelBtn.addEventListener("click", () => {
    toggleNameEdit("off")
})

backBtn.addEventListener("click", () => {
    toggleSelectionDisplay("on")
})

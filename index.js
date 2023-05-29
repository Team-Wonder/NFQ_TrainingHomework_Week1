import { Dog } from "./Animals/dog.js"
import { Cat } from "./Animals/cat.js"
import { Fish } from "./Animals/fish.js"

const nameDisplayCtn = document.querySelector("#name-display-ctn")
const nameEditCtn = document.querySelector("#name-edit-ctn")
const petSelection = document.querySelector("#pet-select")
const selectedPetCtn = document.querySelector("#selected-pet-ctn")
const petAction = document.querySelector("#pet-action-h2")

const petImg = document.querySelector("#pet-img")
const petName = document.querySelector("#pet-name-h3")
const nameInput = document.querySelector("#name-input")

const nameEditBtn = document.querySelector("#name-edit-btn")
const makeSoundBtn = document.querySelector("#make-sound-btn")
const moveBtn = document.querySelector("#move-btn")
const eatBtn = document.querySelector("#eat-btn")

const savBtn = document.querySelector("#sav-btn")
const cancelBtn = document.querySelector("#cancel-btn")

let pet = {}

function toggleNameEdit(cmd) {
    if (cmd === "off") {
        nameDisplayCtn.style.display = "block"
        nameEditCtn.style.display = "none"
        return;
    }

    nameDisplayCtn.style.display = "none"
    nameEditCtn.style.display = "block"
}

petSelection.addEventListener("change", () => {
    switch (petSelection.value) {
        case "dog":
            pet = new Dog("Dog", "https://img.freepik.com/premium-photo/cute-golden-retriver-puppy-white-background_104627-3055.jpg?w=2000")
            break
        case "cat":
            pet = new Cat("Cat", "https://st.depositphotos.com/1004199/1386/i/600/depositphotos_13860480-stock-photo-portrait-of-british-shorthair-cat.jpg")
            break;
        case "fish":
            pet = new Fish("Fish", "https://st.depositphotos.com/1047520/1818/i/950/depositphotos_18184873-stock-photo-goldfish-on-white-background.jpg")
            break;
        default:
            pet = new Dog("Dog", "https://img.freepik.com/premium-photo/cute-golden-retriver-puppy-white-background_104627-3055.jpg?w=2000")
    }

    selectedPetCtn.style.display = "flex"

    petAction.innerHTML = ""
    petName.innerHTML = pet.name
    petImg.src = pet.img

    console.log(pet)
})

nameEditBtn.addEventListener("click", () => {
    nameInput.value = pet.name
    toggleNameEdit("on")
})

makeSoundBtn.addEventListener("click", () => {
    petAction.innerHTML = pet.makeSound();
})

eatBtn.addEventListener("click", () => {
    petAction.innerHTML = pet.eat();
})

moveBtn.addEventListener("click", () => {
    petAction.innerHTML = pet.move();
})

savBtn.addEventListener("click", () => {
    pet.name = nameInput.value;
    petName.innerHTML = pet.name;
    toggleNameEdit("off")
})

cancelBtn.addEventListener("click", () => {
    toggleNameEdit("off")
})


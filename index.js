import { Dog } from "./Animals/dog.js"
import { Cat } from "./Animals/cat.js"
import { Fish } from "./Animals/fish.js"

const dogCtn = document.querySelector("#dog")
const catCtn = document.querySelector("#cat")
const fishCtn = document.querySelector("#fish")
const nameDisplayCtn = document.querySelector("#name-display-ctn")
const nameEditCtn = document.querySelector("#name-edit-ctn")
const petSelectionCtn = document.querySelector("#pet-selection-ctn")
const selectedPetCtn = document.querySelector("#selected-pet-ctn")
const petAction = document.querySelector("#pet-action-h2")

const petImg = document.querySelector("#pet-img")
const petName = document.querySelector("#pet-name-h3")
const nameInput = document.querySelector("#name-input")

const nameEditBtn = document.querySelector("#name-edit-btn")
const makeSoundBtn = document.querySelector("#make-sound-btn")
const moveBtn = document.querySelector("#move-btn")
const eatBtn = document.querySelector("#eat-btn")

const backBtn = document.querySelector("#back-btn")
const savBtn = document.querySelector("#sav-btn")
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
        return;
    }

    nameDisplayCtn.style.display = "none"
    nameEditCtn.style.display = "block"
}

dogCtn.addEventListener("click", () => {
    console.log("dog")
    pet = new Dog("Dog", "https://mcdn.coolmate.me/image/October2021/meme-cheems-1.png")

    petImg.src = pet.img
    petName.innerHTML = pet.name

    toggleSelectionDisplay("off")
})

catCtn.addEventListener("click", () => {
    console.log("cat")

    pet = new Cat("Cat", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aAKFhifsiwACpdHxZHdqy9RDVasz2g6NFmKdN79hy3JwN-Br7ITeSgT07Q-vOR-SCAI&usqp=CAU")

    petImg.src = pet.img
    petName.innerHTML = pet.name

    toggleSelectionDisplay("off")
})

fishCtn.addEventListener("click", () => {
    console.log("fish")

    pet = new Fish("Fish", "https://media.tenor.com/ZHze27YyLIkAAAAC/joel-spinning.gif")

    petImg.src = pet.img
    petName.innerHTML = pet.name

    toggleSelectionDisplay("off")
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

backBtn.addEventListener("click", () => {
    petAction.innerHTML = ""
    toggleSelectionDisplay("on")
})

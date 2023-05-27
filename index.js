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
            pet = new Dog("Dog", "https://mcdn.coolmate.me/image/October2021/meme-cheems-1.png")
            break
        case "cat":
            pet = new Cat("Cat", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aAKFhifsiwACpdHxZHdqy9RDVasz2g6NFmKdN79hy3JwN-Br7ITeSgT07Q-vOR-SCAI&usqp=CAU")
            break;
        case "fish":
            pet = new Fish("Fish", "https://media.tenor.com/ZHze27YyLIkAAAAC/joel-spinning.gif")
            break;
        default:
            pet = new Dog("Dog", "https://mcdn.coolmate.me/image/October2021/meme-cheems-1.png")
    }

    selectedPetCtn.style.display = "flex"

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


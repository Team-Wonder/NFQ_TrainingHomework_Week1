const dogCtn = document.querySelector("#dog")
const catCtn = document.querySelector("#cat")
const fishCtn = document.querySelector("#fish")
const nameCtn = document.querySelector("#name-ctn")

const petSelectionCtn = document.querySelector("#pet-selection-ctn")
const selectedPetCtn = document.querySelector("#selected-pet-ctn")

const backBtn = document.querySelector("#back-btn")
const nameEditBtn = document.querySelector("#name-edit-btn")

let pet = {}

function toggleSelectionDisplayOff() {
    petSelectionCtn.style.display = "none"
    selectedPetCtn.style.display = "flex"
}

dogCtn.addEventListener("click", () => {
    console.log("dog")
    toggleSelectionDisplayOff()
})

catCtn.addEventListener("click", () => {
    console.log("cat")
    toggleSelectionDisplayOff()
})

fishCtn.addEventListener("click", () => {
    console.log("fish")
    toggleSelectionDisplayOff()
})

nameEditBtn.addEventListener("click", () => {
    nameCtn.innerHTML = `
        <label>Enter your pet name: </label>
        <input type="text">
        <div>
            <button>Save</button>
            <button>Cancel</button>
        </div>
    `
})

backBtn.addEventListener("click", () => {
    petSelectionCtn.style.display = "flex"
    selectedPetCtn.style.display = "none"
})

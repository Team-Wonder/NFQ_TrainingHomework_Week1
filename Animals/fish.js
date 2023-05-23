import Animals from "./animals.js"

export default class Fish extends Animals {
    constructor(name, img) {
        super(name, img)
    }

    move() {
       return "I am swimming with my fins" 
    }

    makeSound() {
        return "I cant make sound!"
    }
}


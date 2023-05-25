import Animals from "./animals.js"

export class Fish extends Animals {
    constructor(name, img) {
        super(name, img)
    }

    move() {
       return "I am swimming with my fins." 
    }

    makeSound() {
        return "..."
    }
}


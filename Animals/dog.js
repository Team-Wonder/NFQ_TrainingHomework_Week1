import Animals from "./animals.js"

export class Dog extends Animals {
    constructor(name, img) {
        super(name, img)
    }

    move() {
       return "I am running with 4 legs" 
    }

    makeSound() {
        return "Woof woof!"
    }
}
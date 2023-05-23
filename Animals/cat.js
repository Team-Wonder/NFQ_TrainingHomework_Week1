import Animals from "./animals"

export class Cat extends Animals {
    constructor(name, img) {
        super(name, img)
    }

    move() {
       return "I am running with 4 legs" 
    }

    makeSound() {
        return "Meow meow!"
    }
}
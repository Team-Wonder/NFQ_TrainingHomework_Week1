import Animals from "./animals.js"

export class Cat extends Animals {
    constructor(name, img) {
        super(name, img)
    }

    move() {
       return "I am running on 4 legs." 
    }

    makeSound() {
        return "Meow meow!"
    }
}
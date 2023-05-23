class Animals {
    constructor(name, img) {
        this.name = name
        this.img = img
    }

    eat() {
        return "I am eating. Nom nom nom!"
    }

    move() {
        return "I am moving"
    }

    makeSound() {
        return "I am making sound"
    }
}

class Dog extends Animals {
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

class Cat extends Animals {
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

class Fish extends Animals {
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

class Animals {
    constructor(name, img) {
        this.name = name
        this.img = img
    }

    constructor(img) {
        this.img = img
        this.name = ""
    }

    setName(name) {
        this.name = name;
    }

    eat() {
        return "I am eating. Nom nom nom!"
    }
}
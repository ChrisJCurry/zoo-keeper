class Frog {
    constructor(
        name = '',
        gender = '',
        weight = '',
        poisonous = true,
        jumpHeight = 15,
    ) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.poisonous = poisonous;
        this.jumpHeight = jumpHeight;
    }
}

export default Frog;
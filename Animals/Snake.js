class Snake {
    constructor(
        name = 'Silvester',
        pattern = '',
        gender = '',
        weight = 0,
        fangSize = 0,
        venomous = false,
        dangerousToHumans = false,
        isThereCure = false
    ) {
        this.name = name;
        this.pattern = pattern;
        this.gender = gender;
        this.weight = weight;
        this.fangSize = fangSize;
        this.venomous = venomous;
        this.dangerousToHumans = false;
        this.isThereCure = false;
    }
    bite(enemy) {
        console.log(`HISSSSS ${enemy}`)
    }
}

export default Snake;
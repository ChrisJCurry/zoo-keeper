class Narwhal {
    constructor(
        name = '',
        gender = '',
        hornLength = 9,
        bacons = false,
        dangerousToHumans = false
    ) {
        this.name = name;
        this.gender = gender;
        this.hornLength = hornLength;
        this.bacons = bacons;
        this.dangerousToHumans = dangerousToHumans;
    }
}

export default Narwhal;
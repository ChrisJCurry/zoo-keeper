class HuntsmanSpider {
    constructor(
        name = '',
        gender = '',
        spookyLevel = 3,
        dangerousToHumans = false,
        bugsEaten = 0
    ) {
        this.name = name;
        this.gender = gender;
        this.spookyLevel = spookyLevel;
        this.dangerousToHumans = dangerousToHumans;
        this.bugsEaten = bugsEaten;
    }
}

export default HuntsmanSpider;
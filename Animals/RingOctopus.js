class RingOctopus {
    constructor(
        name = '',
        gender = '',
        rings = 200,
        dangerousToHumans = true,
        intelligent = true
    ) {
        this.name = name;
        this.gender = gender;
        this.rings = rings;
        this.dangerousToHumans = dangerousToHumans;
        this.intelligent = intelligent;
    }
}

export default RingOctopus;
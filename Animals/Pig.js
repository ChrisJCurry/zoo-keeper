class Pig {
    constructor(
        name = '',
        gender = '',
        oinkCount = 500,
        oinkedToday = true
    ) {
        this.name = name;
        this.gender = gender;
        this.oinkCount = oinkCount;
        this.oinkedToday = oinkedToday;
    }
}

export default Pig;
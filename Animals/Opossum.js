class Opossum {
    constructor(
        name = '',
        gender = '',
        hisses = true,
        likesTrash = true,
        dangerousToHumans = false
    ) {
        this.name = name;
        this.gender = gender;
        this.hisses = hisses;
        this.likesTrash = likesTrash;
        this.dangerousToHumans = dangerousToHumans;
    }
}

export default Opossum;
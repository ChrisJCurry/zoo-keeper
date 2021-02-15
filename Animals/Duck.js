class Duck {
    constructor(
        name = '',
        gender = '',
        weight = '',
        canQuack = false,
        likeBreadCrumbs = true,
    ) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.canQuack = canQuack;
        this.likeBreadCrumbs = likeBreadCrumbs;

    }
}

export default Duck;
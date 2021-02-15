class Bear {
    constructor(
        name = 'Barney',
        gender = '',
        weight = '',
        PawGrabbingAbility = 10,
        hibernating = false
    ) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.PawGrabbingAbility = PawGrabbingAbility;
        this.hibernating = hibernating;

    }
}

export default Bear;
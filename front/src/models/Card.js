export class Card{
    constructor(
        id = 0,
        name = '',
        description = '',
        type = '',
        number = 0,
        img = '',
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.number = number;
        this.img = img;
    }
}
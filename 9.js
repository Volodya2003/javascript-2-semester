class Item {
    name = "somebody";
    image = "fffgfgffhf";
    price = 20;
 
    constructor(name,image,price){
        this.name = name;
        this.image = image;
        this.price = price;
    }

    getInfo(){
        console.log( this.name,
            this.image,
            this.price )
    }
}

let item = new Item('some','some.jpg',20);

item.getInfo();

class Armor extends Item
{
    protect = "super protect";

    constructor(name, image, price, protect) {
        super(name, image, price);
        this.protect = protect;
    }

    getInfo(){
        console.log( this.name,
            this.image,
            this.price, this.protect )
    }
}

let armor = new Armor('arm','arm.jpg',400,'power');
armor.getInfo();
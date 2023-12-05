let Item = {
    name : "Jack London",
    description : "Somebody",
    price : 1600,
    discont: 20 ,
    newPrice: 0,
    calculateDiscont()
    {
        this.newPrice = this.price*((100-this.discont)/100);
    },
    printObj(){
        Item.calculateDiscont();
        console.log(Item.name);
        console.log(Item.price);
        console.log(Item.newPrice);
    }
  
  }
  
  Item.name = "The Lord of the Ring ";
  
  
  
  Item.printObj();
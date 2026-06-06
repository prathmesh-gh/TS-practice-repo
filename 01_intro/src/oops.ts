//oops

// class Chai {
//     flavour: string;
//     price:number
//     // constructor(flavour:string,price:number){
//     //     this.flavour=flavour
//     //     this.price=price
//     // }
//     constructor(flavour:string){
//         this.flavour=flavour
//         console.log(this);
        
//     }
// }

// const masalaChai = new Chai("Ginger",20)
// masalaChai.flavour="Masala"


///////////////////////////// Access Modifiers

class Chai { 
    public  flavour: string="Masala Chai"

    private SecretIngrediant ="Cardamom"   
    reveal() {
        return this.SecretIngrediant  //ok
    }

}

class Shop{
    protected shopName ="Chai Corner"
}
class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

//  new Branch().getName



//  

class Walet {
    #balance =100   //private

    getBalance(){
        return this.#balance
    }
}

const w= new Walet()


//readonly
class Cup {
    readonly capacity:number= 250

    constructor( capacity:number){
       this.capacity=capacity
    }
}

////control gates (getter and setter )

class Modernchai{
 private _sugar=2

 get sugar(){
    return this._sugar
 }
 set sugar(value:number){
    if(value >5) throw new Error("Too sweet")
        this._sugar= value
 }

}

const c = new Modernchai()
c.sugar = 3

// Static 
class Ekchai{
    static shopName="chaicode Cafe"

    constructor(public flavour: string){}
}

console.log(Ekchai.shopName);
    
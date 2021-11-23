
class Animal {
    constructor(data) {
        this.scientificName = data.sName;
        this.commonName = data.cName;
        this.birthday = data.birthday; // true or false
        this.ageYear = (new Date()).getFullYear() - this.birthday.getFullYear();
        this.endangered = data.endangered; // true or false
        this.diet = data.diet;
        this.location = "MEDA Zoo";
        this.weightLB = data.weightLB;
        this.sex = data.sex;
    }

    describe() {
        console.log(`${this.commonName} is ${this.ageYear} years old, it eats ${this.diet}.  It lives at the ${this.location}. `);
    }
     feed() {
        console.log(`${this.commonName} is eating ${this.diet}! `);
    }
}

class Mammal extends Animal {
    constructor(data, limbs, pregnant, fur){
        super(data);
        this.bloodyType = "warm";
        this.limbs = limbs;
        this.pregnant = pregnant;
        this.fur = fur;
    }
    sleep() {
        console.log(`${this.commonName} is sleeping. `);
    }
 }

 class Reptile extends Animal {
     constructor(data, limbs, pregnant, eggs){
         super(data);
         this.bloodyType = "cold"
         this.limbs = limbs;;
         this.pregnant = pregnant;
         this.eggs = eggs;
    }
    sleep() {
        console.log(`${this.commonName} is sleeping. `);
        }  
 }

 class Avian extends Animal {
     constructor(data) {
         super(data);
         this.bloodyType = "warm";
         this.limbs;
         this.pregnant;
         this.furTypes;
     }
 }

 let zooArray = []; 

 let giraffe1 = new Mammal( {
    sName: "Girafa Camelopardalis",
    cName: "Giraffe",
    birthday: new Date (),
    endangered: false,
    dangerous: false,
    diet: "plants",
    weightLB: 150,
    sex: "xy"
 }, 4, false, true);

 zooArray.push(giraffe1);
 giraffe1.feed();
 giraffe1.describe();



 let lion1 = new Mammal({
    sName: "Panthera Leo",
    cName: "Lion",
    birthday: new Date("2010-06-23"),
    endangered: true,
    dangerouse: true,
    diet: "meat",
    weightLB: 420,
    sex: "xy"
 }, 4, false, true);

zooArray.push(lion1);
 lion1.feed();
 lion1.describe();


 let turtle1 = new Reptile ({
     sName: "Turtle Jawn",
     cName: "Galapagos Turtle",
     birthday:new Date("01/14/1943") ,
     endangered: false, 
     dangerouse: false,
     diet: "Plants",
     weightLB: 500,
     sex: "xx",
 }, 4, true, 10)

 zooArray.push(turtle1);
 turtle1.feed();
 turtle1.describe();

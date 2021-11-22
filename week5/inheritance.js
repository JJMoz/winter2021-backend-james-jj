// Constructor is a function used when you want to make a object in that CLASS
class Employee {
    constructor() {
        this.name = null;
        this.age = null;
    }
    work () {
        console.log(this.name + " is working!");
    }

}

// INHERITANCE 
class Rectangle {
    constructor(width, height) {
        this.widthInches = width;
        this.heightInches = height;
    }
    getArea(){
        let area = this.widthInches * this.heightInches;
        return area;
    }

    getPerimeter() {
        let perimeter = (this.widthInches * 2) + (this.heightInches * 2);
        return perimeter;
    }
}

let myRectangle = new Rectangle(5,16);
console.log(myRectangle.getArea());
console.log(myRectangle.getPerimeter());

// Repeated the  Rectangle code, there is a shorter way by using INHERITANCE
//  CODE 1 FIRST WAY ..............................................
//class Square {
  //  constructor(width, height) {
    //    this.widthInches = height;
      //  this.heightInches = height;
    // }
    // getArea() {
    //    let area = (thiswidthInches * 2) + (this.heightInches * 2);
    //    return area;   
    // }
    // getPerimeter() {
    //    let perimeter = (this.widthInches * 2) + (this.heightInches * 2);
    //    return perimeter;
    //  }
// }



//  CODE 2  SECONDE WAY ..............................................
// THE INHERITANCE WAY ( LESS CODE)--> same as the "SQUARE" Class code above 
//class Square extends Rectangle{
  //  constructor(width, height) {     
    //}
//}




// CODE 3 THIRD WAY ..................................................
// THE INHERITANCE WAY ( LESS CODE)--> USING "super"
class Square extends Rectangle{
    constructor(side) {
        // This calls the constructor method of the "Parent" or "Inheritied Class". THIS IS REQUIRE AND MUST BE THE FIRST STATEMENT IN THE CONSTRUCTOR. They "super" keyword is used to access and call functions on an object's Parent
        super(side,side);     
    }
}
let mySquare = new Square(10);
console.log(mySquare.getArea());
console.log(mySquare.getPerimeter());
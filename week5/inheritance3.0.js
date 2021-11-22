// INHERITANCE 
class Shape {
    constructor(width, height) {
        this.widthInches = width;
        this.heightInches = height;
        this.name = "shape";
    }
    getArea(){
        let area = this.widthInches * this.heightInches;
        return area;
    }

    getPerimeter() {
        let perimeter = (this.widthInches * 2) + (this.heightInches * 2);
        return perimeter;
    }
    writeInfo() {
        console.log('The are of the ${this.name}')
    }
}
let myShape = new Shape(5,16);
console.log(myShape.getArea());
console.log(myShape.getPerimeter());




class Square extends Shape{
    constructor(side) {
        super(side,side);     
    }
}
let mySquare = new Square(10);
console.log(mySquare.getArea());
console.log(mySquare.getPerimeter());



// OVERRIDING / Replace   (Right Triangle)
class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    // Overriding the previous getArea because Triangles are different
    getArea() {
        let area = (this.widthInches * this.heightInches) / 2;
        return area;
    }
     // Overriding the previous getPerimeter because Triangles are different
    getPerimeter() {
        let perimeter = this.widthInches + this.heightInches + (Math.sqrt(this.widthInches * this.widthInches + this.heightInches * this.heightInches));
        return perimeter;
    }
}

let myTriangle = new Triangle(10);
console.log(myTriangle.getArea());
console.log(myTriangle.getPerimeter());


// Creating Additional Properties (circumference)
class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2)
        this.radiusInches = radius;
        this.diameterInches = radius *2;
    }
    getArea() {
        let area = this.radiusInches * this.radiusInches * Math.PI;
        return area;
    }
    getPerimeter() {
        let perimeter = this.diameterInches * Math.PI;
        return perimeter;
    }
    getCircumference() {
        return this.getPerimeter;
    }
}

let myCircle = new Cirle(12);
console.log("The area of the Circle is  " + myCircle.getArea());
console.log("The perimeter of the Circle is " + myCircle.getPerimeter());
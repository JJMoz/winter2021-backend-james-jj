// 'import' keyword bring in the Vehicle Class from the Vehicles.js file.  It allows us to bring specific cariable names(inside curly braces) form a specific file (inside double quotes)
import {Vehicle} from "./Vehicles.js";

class Car extends Vehicle {
    constructor (superData) {
        super(superData);
        this.wheels;
        this.door;
        this.vin;
        this.owner;
        this.engineHP;
        this.fuelType;
        this.mpg;
        this.bodyType;
    }
}

let honda = new Car();
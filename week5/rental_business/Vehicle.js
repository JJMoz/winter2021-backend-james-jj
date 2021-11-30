// The 'export' keyword allows that function/variable to be  used by the anything else that imports this file
class Vehicle {
    constructor(data){
        this.name = data.name;
        this.make = data.make;
        this.model = data.model;
        this.occupancy = data.occupancy;
        this.purchased = data.purchased;
        this.id = data.id;
        this.timestamp = new Date();
    }
}

module.exports = Vehicle;







// use this instead of lodash
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The max/min is inclusive
}
// console.log(getRandomIntInclusive(1,10));
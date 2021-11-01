// We need to type this so we can start using LODASH in our code. ("_" is the name of the variable ie line 7)
const _ = require("lodash");

// Create a randon Number between 25 and 75
let randomNumber = (Math.floor(Math.random() * 50) + 25);

let randomNumberLodash = _.random(25,75);

console.log("Created by JavaScript: " + randomNumber);
console.log("Created by LODASH: " + randomNumberLodash);
console.log("node project starting... index file");

///////////
timeNow = Date.now();

let lodashTimeNow = _.now();

console.log(timeNow + " JavaScipt version")
console.log(lodashTimeNow + " Lodash time")

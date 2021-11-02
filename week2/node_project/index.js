// We need to type this so we can start using LODASH in our code ( creates a CONSTant variable "_" the underscore is reserved for things like lodash)
const _ = require("lodash");

// Create a random Number between 25 and 75.
let randomNumber = Math.floor((Math.random() * 50) + 25);
let randomNumberLodash = _.random(25,75);

console.log(randomNumber);
console.log(randomNumberLodash);

// Current time (nano seconds since January 1, 1970 using Greenwich Mean Time or UTC (Universal Time Coordinated))
let timeNow = Date.now();
let lodashTimeNow = _.now();

console.log(timenNow);
console.log(lodashTimeNow);
// console log 2 things together by just seperating it by a , comma.
console.log(randomNumber,lodashTimeNow);



//PROJECT 2

// GENERATES  5 RANDOM NUMBERS (only works with when the start number is 1 )
let numberOne = Math.floor(Math.random() * 69) + 1;
let numberTwo = Math.floor(Math.random() * 69) + 1;
let numberThree = Math.floor(Math.random() * 69) + 1;
let numberFour = Math.floor(Math.random() * 69) + 1;
let numberFive = Math.floor(Math.random() * 69) + 1;

// GENERATES POWERBALL NUMBER
let powerBallNumber = Math.floor(Math.random() * 26  ) + 1;

// FIRST 5 RANDOM NUMBERS PUT IN AN ARRAY
let numberArray = [numberOne, numberTwo, numberThree, numberFour, numberFive];

// SHOWS IT IN TERMINAL
console.log("Your lottery numbers are: " + numberArray + " and Powerball " + powerBallNumber);


// END

// GENERATES RANDOM NUMBERS ( allows random intervals that do not start with 1 (Not part of project, more for me)
function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
    
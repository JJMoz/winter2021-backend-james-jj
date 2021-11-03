// Node.js Accepting Arguments.

// Node.js Arguments global variable
// "process.argv" holds an array of the pieces of text FROM the command line (Terminal). All values are taking as "Strings" to change if necessary
// console.log(process.argv[2]);
// Gets the value in the index 2 of process.argv, and try to convert it to a number
let number1 = parseInt(process.argv[2]);
let number2 = parseInt(process.argv[3]);
// Check if the values provided were converted into actual JavaScript number datatype
if (Number.isNaN(number1) || Number.isNaN(number2)) {
    console.log("Sorry but the value you provided is not a valid number. ")
} else {
        let sum = number1 + number2;

        let sentence =  "The sum of " + number1 + " and " + number2 + " is " + sum + ".";

        console.log(sentence);
}

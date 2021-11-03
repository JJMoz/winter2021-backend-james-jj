// CELSIUS AND FAHRENHEIT CONVERTER
/*
- if the user does not type anything after temp.js, provide a message on how to use the script.

- Take in 2 values from the terminal: A number, and the text to fahrenheit or to celsius

- Test the number to make sure we can convert it to JavaScript Number datatype. If we cannot get a number, show an erro message and end the program, otherwise continue

- Check if the second argument is the value to Fahrenheit or to Celsius. If they did , run the appropriate math equation to convert the number. Display the results in the terminal. If not to Fahrenheit or Celsius, show an error message that also describes both options.
*/

let arguments = process.argv;
console.log(arguments[2]);

if (arguments[2] === undefined){
    console.log("Welcome to temperature converter.  After 'node temp.js' type in your temperature number, and afterwards type in either 'toF' to convert from Celcius to Fahrenheit or 'toC' to convert from Fahrenheit to Celcius")

    console.log("Example")
    console.log("node temp.js 72 toC")
}

let number = parseFloat(arguments[2]);
// if Statement inside a if Statement
if (Number.isNaN(number)) {
    console.log("The number you provided is not valid! Use characters 0 to 9 only. Decimal values are okay")
} else {

        if (arguments[3] === "toC") {
           let resultsC =  (number -32) * (5/9)
// ".toFixed rounds decimals to whatever the amount of places you put in between ()"
           console.log("The temperature " + number + "° F in Celcius is " + resultsC.toFixed(1));  
        } else if (arguments[3] === "toF") {
            let resultsF = (number * (9/5)) + 32;
            console.log("The temperature " + number + "°C in Fahrenheit is " + resultsF + "°F.");
        } else {
            console.log("Please use only 'toF' or 'toC' after the number")
        }
}
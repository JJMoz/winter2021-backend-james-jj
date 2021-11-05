const fs = require("fs");

let myObject = {
    num1: 100,
    welcomeString: "Goodmorning",
    inValid: true,
    // Method
    sayHello: function () {
        console.log("Hello");
    }
};

// Create a JSON file
//stringify  takes the OBJECT/values inside () and changes it to a STRING
//put the new String into a variable so we can console.log it
let jsonResults = JSON.stringify(myObject);
console.log(jsonResults);
// Creates JSON file
fs.writeFileSync("data.json", jsonResults, "utf-8");

// Bringing in a JSON file and converting it into JavaScript Object.

// Read the data.json file
let jsonText = fs.readFileSync("data.json", "utf-8");

// Convert the jsonText string (which would hold the json file contents as a string) and convert it into a working JavaScript Object.
let objectFromJSON = JSON.parse(jsonText);

//json version
console.log(jsonText);
// ojbect version. (once it is converted into a OBJECT you can use it as a OBJECT)
console.log(objectFromJSON);
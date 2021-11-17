

// !!!!!! WORKS IN CHROME BUT NOT SAFARI !!!!!!!!

const express = require("express");
const fs = require("fs");

const app = express();
const http = require("http").Server(app);

// Holds our array of all previous entries made (an entry is represented as an object)
let inputHistory;
// Check if we have a file called history.json
if (fs.existsSync("inputHistory.json")) {
    // If we do, read it and load the string into the data variable
    let dataFromJsonFile = fs.readFileSync("inputHistory.json", "utf-8");
    // Convert the JSON string inot a JavaScript Object.
    dataFromJsonFile = JSON.parse(dataFromJsonFile);
    // Grab the Array inside of the history property of the JavaScript Object.
    history = dataFromJsonFile.history;  //???????????????????????????????????????????????????
} else {
    // If we don't have a file called 'history.json' then we start with an empty array.
    inputHistory = [];
}
console.log(inputHistory);

// BODY-PARSER
app.use(express.json({strict: false}))
app.use(express.urlencoded({extended: true}));

const port = 3000;
http.listen(port);

console.log("Running Express server on port " + port);

// Express Routes
app.use("/", express.static("public_html/"));
// Post handler that provides the history array.
app.post("/inputHistory", function(request, response){
    // packages the responses into an object.. Builds an object to respond with, this object will hold the inputHistory ARRAY inside of the history property.
    let responseObject = {
        history: inputHistory
    };
// sends the 'responseObjet' message to the front-end
    response.send(responseObject);

});


// post handler runs the function when activated
app.post("/entry", function(request, response){
    let dataFromFrontEnd = request.body;
    // Server creates a random number between 1 and 10.
    let serverNumber = Math.floor(Math.random() * 10) + 1;
    // Create an object that holds basic data for the "entry" made
    let entry = {
        entryObjectPropertyFirstName: dataFromFrontEnd.fname,
        entryObjectPropertyNumber: dataFromFrontEnd.number,
        entryObjectPropertyServerNumber: serverNumber,
        entryObjectPropertyTimeStamp:(new Date()).toLocaleString("en-US")
    };
    // Add the new entry to the history array.
    inputHistory.push(entry); 

    // Create a object to hold the history array.
    let dataToSave = {
        history: inputHistory //?????????
    };

    // Convert the dataToSave object to a JSON string.
    dataToSave = JSON.stringify(dataToSave);

    // Write the JSON String to the file called history.json
    fs.writeFileSync("history.json", dataToSave, "utf-8");    

    // console.log(inputHistory);

    let results = "";
// Store a specific message inside of results variable, based on wether we matched the number or not
    if (serverNumber == dataFromFrontEnd.number) {
        results = "Congrats, you guessed the correct number!";
    }else {
        results = "Sorry your number did not match, the number was " + serverNumber;
    }
// packages the responses into an object
    let responseObject = {
        message: results,
        history: inputHistory
    };
// sends the 'responeObjet' message to the front-end
    response.send(responseObject);

});



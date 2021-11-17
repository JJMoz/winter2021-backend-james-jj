// Loads in the Mongoose package
const mongoose = require("mongoose");
// Access the crednetials.js file for the MongoDB login details
const credentials = require("./credentialsPWect.js");

// The URL that Mongoose will use to connect to the MongoDB database
const connectURL = credentials.mongoDbCredentials();

console.log(credentials.myVariable);

// Settings and options for Mongoose.
const options = {};

// Create a connection to the MongoDB database.
mongoose.connect(connectURL, options, function (error) {
    if (error) {
        console.log("We hae an Mongoose/MongoDB error jawn", error);
    } else {
        console.log("Successfully connected to the MongoDb Atlas.");
    }
});

// Turns on the Connection

// Object representing the connection
let database = mongoose.connection; 
//Turn on the connectio and link any errors by MongoDB to the console automatically
database.on("error",console.error.bind(console, "We had a MongDB Erro."));
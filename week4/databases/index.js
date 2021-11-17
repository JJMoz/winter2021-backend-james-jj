// Loads in the Mongoose package
const mongoose = require("mongoose");
// Access the crednetials.js file for the MongoDB login details
const credentials = require("./credentialsPWect.js");

// The URL that Mongoose will use to connect to the MongoDB database
const connectURL = credentials.mongoDbCredentials();
//to test credentials link is working
console.log(credentials.specialNumber);

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
database.on("error",console.error.bind(console, "We had a MongDB Error."))

// a class.... Copies Promise to mongoose
mongoose.Promise = global.Promise;
let Schema = mongoose.Schema;

// Define the schema for your employee collection. the values in the object is wheat is allowed on the MongoDB collection.
let employeeSchema = new Schema({
    fname: String,
    lname: String,
    age: Number,
    startDate: String,
});
// Create a model object we can interact with, but we need customize it by specifiying the collection name we want to access, and the Schema we will be using with this collection.
let employeeModel = new mongoose.model("employees", employeeSchema);

// CREATE !!!!
// Create a Mongoose Document. and fill it with our own information
let myFirstEmployee = new employeeModel({
    fname: "Eduardo",
    lname: "Garcia",
    age: 31,
    startDate: (new Date()).toLocaleString()
});
// Save this Document to the MongoDB databse
myFirstEmployee.save(function (error){
    if (error) {
        console.log("Failed to save the document ", error);
    } else {
        console.log("Successfull saved Documents. ");
    }
});
// READ!!!!
// Search for the specific documents based on our criteria located inside of the object in the first argument of the .find() method
employeeModel.find({age: 31}, function (error, results) {
    if (error) { 
        console.log("There was an error searching the DB ", error);
    } else {
        console.log("Found the following Documents: ", results)
    }
});
//  UPDATE !!!!
// Search for a specific document and update the values in that document and save it. (in mongoDB document = row).
employeeModel.findByIdAndUpdate("61954ead4dfe29648f28dbe4", {fname: "Changed Named", lname: "Ross"}, function(error){
    if (error) {
        console.log("There was an error updating the document", error)
    } else {
        console.log("Document Successfully updated.");
    }
});

// DELETE !!!!
// Searches for a specific document and deletes it.
employeeModel.findByIdAndDelete("6195581bd8e73d1e3fa165d1", function(error){
    if (error) {
        console.log("Failed to delete the Document", error);
    } else {
        console.log ("Successfully deleted the document");
    }
});
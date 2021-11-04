// This tells Node we would like to use the FS module (it is built in already) in this Javascript file.
const fs = require("fs");

// METHOD a function of an object
// .writeFileSync() Write a file to the same folder as this JavaScript file. 
// .writeFileSync ARGUMENTS: (File name, File Contents, Character Set.   Character Set = ASCII or Unicode: what encoding system the file is using

fs.writeFileSync("test.txt", "Hello Jawn","utf-8");
//fs.writeFileSync("veryimportantinfo.txt", "Passwords 6969", "utf-8");


// .readFileSync() READS a file, and returns the contents of the file as a STRING.
// .readFileSync() ARGUMENTS: (File Name, Character Set).
let fileContents = fs.readFileSync("veryimportantinfo.txt", "utf-8");
// put into a variable


// Create a Date object
let time = new Date();

fileContents = fileContents + "\n" + time.toLocaleString("en-US");
fs.writeFileSync("veryimportantinfo.txt", fileContents, "utf-8");
// SETUP  $$$ IT WORKS, Yeah !!!!!
const fs = require("fs");
const arguments = process.argv;
const input = arguments[2];
const dataFile = input;

if (fs.existsSync(dataFile)) {
    let data = fs.readFileSync(dataFile, "utf-8");
    let dataArray = data.split(" ");
    let numberOfWords = dataArray.length;
console.log(numberOfWords);
} else {
      
    console.log("Cannot find specified file!");
}


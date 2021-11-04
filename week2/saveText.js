
const fs = require("fs");

// Checks if a file exists using "fs.exists()"
// "!" flips the existing boolean, i.e. True to False (this case) or False to True.
if (!fs.existsSync("log.txt")) {
    fs.writeFileSync("log.txt", "", "utf-8");
}

let arguments = process.argv;
let input = arguments[2];
let existingContent = fs.readFileSync("log.txt", "utf-8")
existingContent = existingContent + "\n" + input;
fs.writeFileSync("log.txt", existingContent, "utf-8");
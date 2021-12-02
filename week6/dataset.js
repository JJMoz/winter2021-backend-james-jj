// SETUP
const fs = require("fs");
// existsSync check if a file exists, returns true if it does, returns false if it doesn't
if (fs.existsSync("test.csv")) {
       let data = fs.readFileSync("test.csv", "utf-8");
       // store in variable and then splits the data string, by each new line (\n)
       let dataArray = data.split("\n");
       // puts first line in a varible (1st line = 0)
       let singleline = dataArray [0];
       // Splits the first line by commas. ( the 1st line is usually has the labels for the columns of a csv)
       let columnTitles = singleline.split(",");
        // Create a class based on Column Titles
        class StreetTree {
            constructor() {
                for (let i = 0; i < columnTitles.length; i++) {
                    this[columnTitles[i]] = null;
                }
            }
        }
        console.log(new StreetTree());
} else {
    console.log("Cannot find specified file!");
}




//What percentage of trees are sidewalk?







//  Whats the most frequent Tree Species?


// From trees that have a plant date, how many were planted in 1955?


// How many trees does DPW take care of?

// SETUP
const fs = require("fs");
const dataFile = "Street_Tree_List.csv";
let treeObjects
// existsSync check if a file exists, returns true if it does, returns false if it doesn't
if (fs.existsSync(dataFile)) {
       let data = fs.readFileSync(dataFile, "utf-8");
       // store in variable and then splits the data string, by each new line (\n)
       let dataArray = data.split("\n");
       // puts first line in a varible (1st line = 0)
       let singleline = dataArray [0];
       // Splits the first line by commas. ( the 1st line is usually has the labels for the columns of a csv)
       let columnTitles = singleline.split(",");
        // Create a class based on Column Titles
        class StreetTree {
            constructor(treeData) {
                if (treeData === undefined || treeData[0] === "" || treeData.length === 0) {}
                // Loops through the columnTitles array and creates a property for each of these Array Elements.
                for (let i = 0; i < columnTitles.length-1; i++) {
                    if (treeData[i] == undefined) {
                        console.log(`Undefined Detected for array ID: ${i}`);
                    }
                    this[columnTitles[i]] = treeData[i];
                }
            }
        }

    treeObjects = [];
// '-1' after length because there is a empty line at the end of the Street_Tree_List.csv stops the loop at 1 less line
        for (let i = 1; i < dataArray.length-1; i++) {
            let lineArray = dataArray[i].split(",");

           let treeObject = new StreetTree(lineArray);
           treeObjects.push(treeObject);
        }

        // Removes the last empty object because dataset has an empty line at the end
        treeObjects.pop();

          console.log(treeObjects.length);
   
} else {
    console.log("Cannot find specified file!");
}




//What percentage of trees are sidewalk?

for (let i = 0; i < treeObjects.length; i++) {

}





//  Whats the most frequent Tree Species?


// From trees that have a plant date, how many were planted in 1955?


// How many trees does DPW take care of?

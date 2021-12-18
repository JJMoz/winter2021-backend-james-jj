// JAMES MORRISSEY
// PROJECT 5


// $$$$ SETUP $$$$$
const fs = require("fs");
const dataFile = "City-owned_Facilities_-_Fire_and_Police.csv";
let buildingObjects

if (fs.existsSync(dataFile)) {
       let data = fs.readFileSync(dataFile, "utf-8");
      
       let dataArray = data.split("\n");
   
       let firstLine = dataArray [0];
      
       let columnTitles = firstLine.split(",");
    
        class building {
            constructor(buildingData) {
                    
                if (buildingData === undefined || buildingData[0] === "" || buildingData.length === 0 ) {
                    console.log("Cannot build Object, empty array provided.");
                } else {

                    
                    for (let i = 0; i < columnTitles.length; i++) {


                        if (buildingData[i] === undefined) {
                            console.log(`Undefined Detected for Building array ID: ${i}`);
                            console.log(buildingData);
                        }

                       
                        this[columnTitles[i]] = buildingData[i];
                    }
                }
            }
        }

    buildingObjects = [];

        for (let i = 1; i < dataArray.length-1; i++) {
            let lineArray = dataArray[i].split(",");

            let treeObject = new building(lineArray);
            
            buildingObjects.push(treeObject);
        }
    
    } else {
      
        console.log("Cannot find specified file!");
    }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! QUESTION NUMER 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1.  How many Facilities do the Fire Department own?

    let fireBuildings = {};

    for (let i = 0; i <  buildingObjects.length; i++) {

        let currentBuilding = buildingObjects[i];

        if (fireBuildings.hasOwnProperty(currentBuilding.jurisdiction)) {
            fireBuildings[currentBuilding.jurisdiction] += 1;
        } else {
            fireBuildings[currentBuilding.jurisdiction] = 1;
        }
    }

   //$$$ console.log(fireBuildings);

    // Tally the amount of fireDepartment vs policeDepartment.
    let buildingTally = {
        fireDepartment: 0,
        policeDepartment: 0
    };

    for (let site in fireBuildings) {

        let siteArray = site.split(":");

        // console.log(siteArray);

        if (siteArray[0] === "Fire Department") {
            buildingTally.fireDepartment += fireBuildings[site];
        } else {
            buildingTally.policeDepartment += fireBuildings[site];
        }

    }





    // Official answer to question.
    let question1 = "HOW MANY FACILITIES DO THE FIRE DEPARTMENT OWN?";
    let answerQ1 = `The Fire Department has ${buildingTally.fireDepartment} facilities in San Francisco.`;
    // Puts Question and answer on Terminal
    console.log(question1);
    console.log(answerQ1);
     

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! QUESTION NUMER 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2.  What is the Largest building the Fire Department own? (Gross Square Feet)

    let maxGrossSqFeet = parseInt(buildingObjects[0].gross_sq_ft);



    for (let i = 0; i < buildingObjects.length; i++) { 
        let currentBuildingsGrossSqFeet = parseInt(buildingObjects[i].gross_sq_ft);
         if (currentBuildingsGrossSqFeet >= maxGrossSqFeet) {
                maxGrossSqFeet = currentBuildingsGrossSqFeet;
        }
    }
   
    let question2 = "WHAT IS THE LARGEST BUILDING THE FIRE DEPARTMENT OWN?";
    let answerQ2 = `The largest Fire Department building is ${maxGrossSqFeet} square feet.`;
    console.log(question2);
    console.log(answerQ2);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! QUESTION NUMER 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 3. What zip code has the most Police and Fire department buildings?

let zipCodes = {};

for (let i = 0; i <  buildingObjects.length; i++) {

    let currentBuildingZipcode = buildingObjects[i];

    if (zipCodes.hasOwnProperty(currentBuildingZipcode.zip_code)) {
        zipCodes[currentBuildingZipcode.zip_code] += 1;
    } else {
        zipCodes[currentBuildingZipcode.zip_code] = 1;
    }
}

let mostZipCode = "";
let highestCount = 0;

for (let allZipCodes in zipCodes) {
    let currentZipCodeCount = zipCodes[allZipCodes];
    if (highestCount < currentZipCodeCount) {
        mostZipCode = allZipCodes;
        highestCount = currentZipCodeCount
    }
}

let question3 = "WHAT ZIP CODE HAS THE MOST POLICE AND FIRE DEPARTMENT BUILDINGS?";
let answerQ3 = `The Zip Code with the most Fire and Police Buildings is ${mostZipCode} with ${highestCount} buildings`;
console.log(question3);
console.log(answerQ3);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! QUESTION NUMER 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4. What supervisor district has the least buildings?

let district = {};

for (let i = 0; i <  buildingObjects.length; i++) {

    let currentdistrict = buildingObjects[i];

    if (district.hasOwnProperty(currentdistrict.supervisor_district)) {
        district[currentdistrict.supervisor_district] += 1;
    } else {
        district[currentdistrict.supervisor_district] = 1;
    }
}

let count = "";
let districtWithTheMost = 0;

for (let allDistrict in district) {
    let currentDistrictCount = district[allDistrict];
    if (districtWithTheMost < currentDistrictCount) {
        count = allDistrict;
        districtWithTheMost = currentDistrictCount
    }
}

let question4 = "WHAT SUPERVISOR DISTRICT HAS THE MOST BUILDINGS?";
let answerQ4 = `The District with the most Buildings is ${count} with ${districtWithTheMost} building(s)`;
console.log(question4);
console.log(answerQ4);


// !!!!!! WORKS IN CHROME BUT NOT SAFARI !!!!!!!!

const express = require("express");
const app = express();
const http = require("http").Server(app);

// BODY-PARSER
app.use(express.json({strict: false}))
app.use(express.urlencoded({extended: true}));

const port = 3000;
http.listen(port);

console.log("Running Express server on port " + port);

// Express Routes
app.use("/", express.static("public_html/"));

// post handler runs the function when activated
app.post("/entry", function(request, response){
    let dataFromFrontEnd = request.body;
    let serverNumber = Math.floor(Math.random() * 10) + 1;

    let results = "";

    if (serverNumber == dataFromFrontEnd.number) {
        results = "Congrats, you guessed the correct number!";
    }else {
        results = "Sorry your number did not match, the number was " + serverNumber;
    }
// packages the responses into an object
    let responseObject = {
        message: results
    };
// sends the 'responeObjet' message to the front-end
    response.send(responseObject);

});

// !!!!!! WORKS IN CHROME BUT NOT SAFARI !!!!!!!!
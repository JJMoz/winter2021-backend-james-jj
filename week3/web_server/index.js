// Use the Express Package, ( bring in Express into project)
const express = require("express");

// Use the 'body-parser' package.
const bodyParser = require("body-parser");

// creates webserver OBJECT and puts it in a variable "app"
const app = express();

// Allows Express to use the HTTP module of Node. Makes http module aware of "express"
const http = require("http").Server(app);

app.use( express.json({strict:false }));
app.use( express.urlencoded({extended: true }));

// puts the port number in a variable so it is easier to change
const port = 3000;

// tells the express/Http what port to use(listen too) 
http.listen(port);// Common Development Ports: 8080, 3000 = Node

// 'process.env is a Global variable s injected by the Node at runtime for your application to use and it represents the state of the system environment your application is in when it starts. For example, if the system has a PATH variable set, this will be made accessible to you through process.env.PATH which you can use to check where binaries are located and make external calls to them if required.
//http.listen(process.env.PORT || 80);


console.log("Express server is running on port " + port + "."); 

// Express Routes. Allows us to "redirect" a URL filepath to a specific folder
app.use("/", express.static("public_html/"));
// "/" is the file path (localhost in this case)
// This .post() method handles any POST request made by the /test filepath. When a request is made, run the callback function.
app.post("/test", function(request, response){
//Data from the front end is located inside of request.body
   // let dataFromRequest = JSON.parse(request.body);
    
    // The following code runs when a request is made
    console.log("The front end sends the following: ", request.body);

    let myResponseObject = {
        response: "Heard you loud and clear!"
    };

    // We send a a response to front-end client  with a Status Code 200 
   // response.sendStatus(200);

   // change the 200 message to the variable 'response': of the javascript object 'myResponseObject' The object will be automatically convewrted to a JSON string to the front-end. This also ends the .post() method, similar to the return keyword
    response.send(myResponseObject);

});
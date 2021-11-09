// Use the Express Package, ( bring in Express into project)
const express = require("express");

// creates webserver OBJECT and puts it in a variable "app"
const app = express();

// Allows Express to use the HTTP module of Node. Makes http module aware of "express"
const http = require("http").Server(app);

// puts the port number in a variable so it is easier to change
const port = 80;

// tells the express/Http what port to use(listen too) 
// 3000 is the most common port used in express
http.listen(port);
// 'process.env is a Global variable s injected by the Node at runtime for your application to use and it represents the state of the system environment your application is in when it starts. For example, if the system has a PATH variable set, this will be made accessible to you through process.env.PATH which you can use to check where binaries are located and make external calls to them if required.
//http.listen(process.env.PORT || 80);


console.log("Express server is running on port " + port + "."); 

// Express Routes. Allows us to "redirect" a URL filepath to a specific folder
app.use("/", express.static("public_html/"));
// Use the Express Package, ( bring in Express into project)
const express = require("express");

// creates webserver OBJECT and puts it in a variable "app"
const app = express();

// Allows Express to use the HTTP module of Node. Mkaes http module aware of "express"
const http = require("http").Server(app);

// tells the express/Http what port to use(listen too) 
// 3000 is the most common port used in express
http.listen(3000);
console.log("Express server is running on port 3000."); 
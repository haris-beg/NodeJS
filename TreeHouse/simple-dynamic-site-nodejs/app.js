/**
 * Created by r625361 on 10/6/2016.
 */
var router = require("./router");
//Problem: We need a simple way to look at a user's badge account and JS point from a web browser
//Solution: use node js to perform the profile lookups and serve our templates via http

// 1. Create a web server
var http = require("http");
http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(3000);
console.log('Server running at http://localhost:3000');

// 4. A function that handles the reading of files and merge in values
    // read from template file and get a string
        // merge values into string
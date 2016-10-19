'use strict';

var express = require("express");

var app = express();

// serve the static (angular app) file from the public folder
app.use('/', express.static('public'));

app.listen(3000, function () {
    console.log("The server is running on port 3000!");
});
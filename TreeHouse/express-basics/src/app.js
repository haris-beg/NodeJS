'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

app.get('/', function (req, res) {
    res.send("<h1>I love this course!</h1>");
});

app.listen(3000, function () {
    console.log("The front-end server is running on port 3000 ...");
});
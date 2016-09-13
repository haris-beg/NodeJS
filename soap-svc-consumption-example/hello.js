var express = require('express');
//var bodyParser = require('body-parser');
var cors = require('cors');

function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  //hello.use(bodyParser());


  // ALL REST endpoint - query params may or may not be populated
  hello.all('/', function(req, res) {
    console.log(new Date(), 'In hello route GET / req.query=', req.query);
    var world = req.query && req.query.hello ? req.query.hello : 'World';

    // see http://expressjs.com/4x/api.html#res.json
    res.json({msg: 'Hello ' + world});
  });

  return hello;
}

module.exports = helloRoute;
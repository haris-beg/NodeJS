var express = require('express');
//var bodyParser = require('body-parser');
var cors = require('cors');

function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  //hello.use(bodyParser());


  // ALL REST endpoint - query params may or may not be populated
  hello.all('/', function(req, res) {
    console.log(new Date(), 'In hello route ALL / req.query=', req.query);
    var barcode = req.query.barcode || req.body.barcode;
    var wsdlUrl = 'http://www.searchupc.com/service/UPCSearch.asmx?wsdl';

    // see http://expressjs.com/4x/api.html#res.json
    res.json({msg: 'Hello ' + world});
  });

  return hello;
}

module.exports = helloRoute;
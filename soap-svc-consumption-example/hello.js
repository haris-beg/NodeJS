var express = require('express');
//var bodyParser = require('body-parser');
var cors = require('cors');

function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  //hello.use(bodyParser());


  hello.all('/', function(req, res) {
    console.log(new Date(), 'In hello route / req.query=', req.query);
    var barcode = req.query.barcode || req.body.barcode;
    var wsdlUrl = 'http://www.searchupc.com/service/UPCSearch.asmx?wsdl';
  });

  return hello;
}

module.exports = helloRoute;
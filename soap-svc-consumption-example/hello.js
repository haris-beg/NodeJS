var soap = require('soap');
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
    soap.createClient(wsdlUrl, function(err, soapClient){
        // we now have a soapClient - we also need to make sure there's no `err` here. 
        if (err) {
            return res.status(500).json(err);
        }

        soapClient.GetProduct({
            upc : barcode,
            accesstoken : '924646BB-A268-4007-9D87-2CE3084B47BC'
        }, function (err, result) {
            if (err) {
                return res.status(500).json(err);
            }
            else {
                return res.json(result);
            }
        });
    });
  });

  return hello;
}

module.exports = helloRoute;
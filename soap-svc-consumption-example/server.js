var express = require('express');
var morgan = require('morgan');
// include the routers
var helloRouter = require('./hello');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

// mount the routers
app.use('/hello', helloRouter);

//app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});

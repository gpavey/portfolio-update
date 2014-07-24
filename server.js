// public modules
var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');


var fs         = require("fs");

var routePath  = "./js/";

var app        = express();


// Added to allow cross-domain request from the UI
app.use(function(req,res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Origin, X-Requested-With, Content-Type, Accept');
  return next();
})

fs.readdirSync(routePath).forEach(function(file) {
    var route=routePath+file;
    require(route)(app);
});




var port = process.env.PORT || 8080;    // set our port

module.exports = app;

app.listen(port);
console.log('Magic happens on port ' + port);
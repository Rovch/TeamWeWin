var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//express info
//=============================================================
var app = express();
var PORT = process.env.PORT || 3333;


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
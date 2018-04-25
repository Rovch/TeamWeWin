var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//express info
//=============================================================
var app = express();
var PORT = process.env.PORT || 3338;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./app/routing/htmlRoutes.js')(app);
//require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
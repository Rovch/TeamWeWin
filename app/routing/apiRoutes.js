var list = require("../info/restable.js")
module.exports = function (app) {

    app.get('/api/table', function (req, res) {
      res.json(list);
      console.log(list)
    });
  
  
   };
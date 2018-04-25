var list = require("../info/restable.js")
module.exports = function (app) {

    app.get('/api/table', function (req, res) {
      res.json(list);
      console.log(list)
    });
    app.post('/api/addtable', function (req, res) {

        var newTable = req.body

        list.push(newTable)
        
        res.json(list);
        console.log(list)
      });
   };
var list = require("../info/restable.js")
module.exports = function (app) {

    app.get('/api/table', function (req, res) {
      res.json(list);
      console.log(list)
    });
  
//   app.post("/api/new", function (req, res) {
//     // newFriend is the user that filled out the survey
//     var newCharacter = req.body;
//     console.log(newCharacter)
//     // Put new friend from survey in "database" array
//     characters.push(newCharacter);
  
//     // return the best match friend
//     res.json(characters);
//   });
  
  
   };
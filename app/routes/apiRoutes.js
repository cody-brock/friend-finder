var friendsArr = require("../data/friends");

module.exports = function(app) {

//Not sure if this one works...
  // Displays all friends
app.get("app/data/friends", function (req, res) {
return res.json(friendsArr);
});


// Displays a single character, or returns false
// app.get("/api/tables/:table", function (req, res) {
// var chosen = req.params.table;

// console.log(chosen);

// for (var i = 0; i < characters.length; i++) {
//   if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//   }
// }

// return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/app/data/friends", function (req, res) {
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
var newFriend = req.body;

console.log(newFriend);

friendsArr.push(newFriend);

res.json(newFriend);

});
}
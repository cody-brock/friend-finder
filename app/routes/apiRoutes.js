var friendsArr = require("../data/friends");

module.exports = function(app) {

//Not sure if this one works...
  // Displays all friends
app.get("/app/data/friends", function (req, res) {
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

//Code here to match the friends...
let minDiff = Infinity;
let closestMatch
for (let i = 0; i < friendsArr.length; i++) {
  let currDiff = 0;
  for (let j = 0; j < friendsArr[i].scores.length; j++) {
    currDiff += Math.abs(newFriend.scores[j] - friendsArr[i].scores[j]);
  }
  if (currDiff < minDiff) {
    closestMatch = friendsArr[i];
    minDiff = currDiff;
  }
  console.log("Compared you to: ", friendsArr[i].name);
  console.log("Your score difference was: ", currDiff);
  console.log("------")
}

console.log("*****************************")
console.log("YOUR NEW FRIEND IS: ", closestMatch);
console.log("Your score difference was only: ", minDiff);
console.log("*****************************")



friendsArr.push(newFriend);

res.json(newFriend);

});
}
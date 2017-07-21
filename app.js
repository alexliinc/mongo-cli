// app.js

//HI NICK or ZEB
//:) hope my code is readable enought

var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db) {
  var collection = db.collection('restaurants');
  var command = prompt("Enter what command you want to use ie(ALL, FIND, INSERT, EDIT, DELETE): ");
  // --------------- SELECT ALL && FIND BY
  //var allChoice = prompt("Type 'all' or a restaurant name' names: ");

  // --------------- INSERTING
  // var name = prompt("Enter name of restaurant: ");
  // var street = prompt("Enter name of street: ");
  // var zip = prompt("Enter name of zip: ");
  // var yelp = prompt("Enter new yelp: ");

  //--------------- EDIT
  // var name = prompt("Enter name of restaurant to edit: ");
  // var street = prompt("Enter name of street: ");
  // var zip = prompt("Enter name of zip: ");
  // var yelp = prompt("Enter new yelp: ");

  //--------------- DELETE
  //var name = prompt("Enter name of restaurant to DELETE: ");


  // --------------------------------------------------------------------------

  // --------------- SELECT ALL
  // if (allChoice == "all") {
  //   collection.find().toArray(function(err, doc) {
  //     console.log(doc);
  //   });
  // } else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }

  // --------------- FIND BY
  // collection.find({
  //   "name": allChoice
  // }).toArray(function(err, doc) {
  //   console.log(doc);
  // });

  // --------------- INSERTING
  // collection.insert({
  //   "name": name,
  //   "address": {
  //     "street": street,
  //     "zipcode": zip
  //   },
  //   "yelp": yelp
  // });

  // --------------- EDIT
  // collection.update({
  //   "name": name
  // }, {
  //   $set: {
  //     "address": {
  //       "street": street,
  //       "zipcode": zip
  //     },
  //     "yelp": yelp
  //   }
  // });

  // --------------- DELETE
  // collection.deleteOne({
  //   "name": name
  // });

  // --------------- USING SWITCH STATMENT

  switch (command) {
    case "ALL":
      collection.find().toArray(function(err, doc) {
        console.log(doc);
      });
      break;
    case "FIND":
      var found = prompt("Type restaurant name: ");
      collection.find({
        "name": found
      }).toArray(function(err, doc) {
        console.log(doc);
      });
      break;
    case "INSERT":
      var name = prompt("Enter NEW name of restaurant: ");
      var street = prompt("Enter name of street: ");
      var zip = prompt("Enter name of zip: ");
      var yelp = prompt("Enter new yelp: ");
      collection.insert({
        "name": name,
        "address": {
          "street": street,
          "zipcode": zip
        },
        "yelp": yelp
      });
      console.log("DONE");
      break;
    case "EDIT":
      var name = prompt("Enter name of restaurant to edit: ");
      var street = prompt("Enter name of street: ");
      var zip = prompt("Enter name of zip: ");
      var yelp = prompt("Enter new yelp: ");
      collection.update({
        "name": name
      }, {
        $set: {
          "address": {
            "street": street,
            "zipcode": zip
          },
          "yelp": yelp
        }
      });
      console.log("DONE");
      break;
    case "DELETE":
      var name = prompt("Enter name of restaurant to DELETE: ");
      collection.deleteOne({
        "name": name
      });
      console.log("DONE");
      break;
    default:
      console.log("NOT A COMMAND");
  }
});

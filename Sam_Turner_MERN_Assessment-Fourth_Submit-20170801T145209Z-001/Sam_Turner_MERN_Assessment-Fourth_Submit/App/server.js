var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const express = require("express");
const fs = require("fs");
const mongoose = require ("mongoose");
var assert = require('assert');
var mongo = require ('mongodb');
const app = express();
var bugSchema = require ('./Schema')

app.set("port", process.env.PORT || 8081);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect('mongodb://localhost/local');

mongoose.model('bugs', {bugSchema});

app.get ('/bugs', function(req, res) {
	mongoose.model('bugs').find(function(err, bugs) {
		res.send(bugs); 
	});
});

app.listen(app.get("port"), () => {
  console.log('Find the server at: http://localhost:${app.get("port")}/');
});



// var findBugs = function(db, callback) {
	// var cursor = db.collection('bugs').find();
	// cursor.each(function(err, doc){
		// assert.equal(er, null);
		// if(doc !=null {
			// console.dir(doc);
		// }else{
			// callback();
		// }
	// });
// };

// MongoClient.connect('mongodb://localhost/local', function (err, db){
	// assert.equal(null, err);
	// console.log("Connect to server.");
	// findBugs(db, function() {
		// db.close();
	// });
	// const bugs = db.collection('bugs').find({}).toArray(function(err,docs){
		// bugsArray = docs;
	// });
	// console.log(bugs);
// });
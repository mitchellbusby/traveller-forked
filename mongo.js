// mongodb
var MongoClient = require('mongodb').MongoClient;
var DB_URI = "mongodb://localhost:27017/local"

var client = function(DB_URI, callback) {
  MongoClient.connect(DB_URI, callback);
}

var getAllImages = function(callback) {
	client(DB_URI, function(err, db) {
		var cur = db.collection('images').find({});
		cur.toArray(function(err, collection) {
			console.log(collection);
			db.close();
			callback(err, collection);
		})
	});
}
var insertAnImage = function() {

}
var deleteAnImage = function() {

}
var likeAnImage = function(id, callback) {
	client(DB_URI, function(err, db) {
		if (err) {return callback(err);}
		db.collection('images').update({'id':id}, {
			$inc: {
				likes: 1
			}
		});
		callback();
	});
}
var unlikeAnImage = function(id, callback) {
	client(DB_URI, function(err, db) {
		if (err) {return callback(err);}
		db.collection('images').update({'id':id}, {
			$inc: {
				likes: -1
			}
		});
		callback();
	});
}
var exports = module.exports = {};

exports.getAllImages = getAllImages;
exports.likeAnImage = likeAnImage;
exports.unlikeAnImage = unlikeAnImage;

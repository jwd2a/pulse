var mongoose = require('mongoose');

var User = new mongoose.Schema({
	email: String,
	sites: Array
});

exports.model = mongoose.model("User", User);
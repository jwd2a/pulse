var mongoose = require('mongoose');

var Event = new mongoose.Schema({
	site: String,
	type: String,
	UID: String,
	UIDType: String,
	createdAt: Date
});

exports.model = mongoose.model("Event", Event);


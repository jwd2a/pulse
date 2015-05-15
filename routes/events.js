var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Event = require("../models/events.js").model;
var User = require("../models/users.js").model;


router.get("/", function (req, res) {

	Event.find(function (err, events) {
		if (events) {
			res.send(events);
		}
	});
});

router.post("/", function (req, res) {
	User.findOne({ sites: { $elemMatch: { "apiKey": req.body.apiKey } } }, function (err, user) {
		if (!user) {
			res.send(404);
		} else if (user) {
			var event = new Event({
				site: req.body.apiKey,
				type: req.body.eventType,
				UID: req.body.UID,
				UIDType: req.body.UIDType
			});
			event.save(function (err, event) {
				if (event) {
					res.send(event);
				}
			});
		}
	});
});

module.exports = router;
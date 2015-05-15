var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Event = require("../models/events.js").model;


router.get("/", function(req, res){

	Event.find(function(err, events){
		if(events){
			res.send(events);
		}
	});
});

router.post("/", function(req, res){
	var event = new Event({
		UID: req.body.UID,
		UIDType: req.body.UIDType
	});
	event.save(function(err, event){
		if(event){
			res.send(event);
		}
	});
});

module.exports = router;
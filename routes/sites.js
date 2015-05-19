var express = require('express');
var router = express.Router();

var Events = require("../models/events.js").model;

/* GET users listing. */
router.get('/:id', function(req, res) {
  Events.find({site: req.params.id}, function(err, events){
    if(!err){
      res.send({
        eventCount: events.length,
        events: events
      });
    }
  });
});



module.exports = router;

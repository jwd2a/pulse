var express = require('express');
var router = express.Router();
var guid = require('guid');

var User = require("../models/users.js").model;

/* GET users listing. */
router.get('/', function(req, res) {
  User.find({}, function(err, result){
    if(result){
      res.send(result);
    }
  });
});

router.post('/', function(req, res){
  var user = new User({
    email: req.body.email
  });
  
  user.save(function(err, user){
    if(user){
      res.send(user);
    }
  });
});

router.post("/:id/sites", function(req, res){
  
  var apiKey = guid.create();
  
  var site = {
    name: req.body.siteName,
    url: req.body.siteUrl,
    apiKey: apiKey.value,
  }
  
  User.findById(req.params.id, function(err, user){
    if(user){
      user.sites.push(site);
      user.save(function(err, user){
        if(user){
          res.send(user);
        }
      });
    }
  });
});

module.exports = router;

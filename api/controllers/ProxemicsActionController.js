'use strict';


var mongoose = require('mongoose'),
  ProxemicsAction = mongoose.model('ProxemicsAction');

exports.list_all_actions = function(req, res) {
  ProxemicsAction.find({}, function(err, rule) {
    if (err)
      res.send(err);
    res.json(rule);
  });
};




exports.create_an_action = function(req, res) {
  var new_action = new ProxemicsAction(req.body);
  new_action.save(function(err, rule) {
    if (err)
      res.send(err);
    res.json(rule);
  });
};


exports.read_an_action = function(req, res) {
  ProxemicsAction.findById(req.params.ActionId, function(err, rule) {
    if (err)
      res.send(err);
    res.json(rule);
  });
};


exports.update_an_action = function(req, res) {
  RuleInteraction.findOneAndUpdate(req.params.ActionId, req.body, {new: true}, function(err, rule) {
    if (err)
      res.send(err);
    res.json(rule);
  });
};


exports.delete_an_action = function(req, res) {


  ProxemicsAction.remove({
    _id: req.params.ActopmOd
  }, function(err, rule) {
    if (err)
      res.send(err);
    res.json({ message: 'Action successfully deleted' });
  });
};

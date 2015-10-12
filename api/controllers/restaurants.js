'use strict';

var request = require('request');

module.exports = {
  getRestaurants: getRestaurants,
  getReviews: getReviews
};

function getRestaurants(req, res) {
  request('http://api.usergrid.com/davidwcai/sandbox/restaurants', function(err, resp, body) {
    if (err) {
      res.send(err);
    } else {
      var results = {};
      body = JSON.parse(body);
      results.entities = body.entities;
      results.count = body.count;
      results.cursor = body.cursor;
      res.send(results);
    }
  });
}


function getReviews (req, res) {
  var restID = req.swagger.params.id.value;
  request("http://api.usergrid.com/davidwcai/sandbox/reviews?limit=999&ql=restID=" + restID, function (err, resp, body) {
    if (err) {
      res.send(err);
    } else {
      body = JSON.parse(body);
      var results = {};
      results.entities = body.entities;
      results.count = body.count;
      results.cursor = body.cursor;
      res.send(results);
    }
  });
}

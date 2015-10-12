'use strict';

var request = require('request');

module.exports = {
  getRestaurants: getRestaurants
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

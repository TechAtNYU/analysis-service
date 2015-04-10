var graph = require('fbgraph');
var Q = require('q');
var request = require('request');

graph.setAccessToken(process.env.TNYUAccessToken);

var API_BASE_URL = "https://api.tnyu.org/v1.0/";
var People = {};

var LoadPeopleFromAPI = function() {
  var d = Q.defer();
  request({
    rejectUnauthorized: false,
    'headers': {
      'x-api-key': process.env.TNYUAPIKey
    },
    url: API_BASE_URL + "people",
    timeout: 100000,
    json: true
  }, function(err, response, body) {
    for (var i = 0; i < body.people.length; i++) {
      People[body.people[i].facebookId] = body.people[i];
      if(i == body.people.length - 1){
        d.resolve();
      }
    }
  });
  return d.promise;
};

var GetAttendees = function(eventID) {
  var d = Q.defer();
  graph.get(eventID + "/attending?limit=1000", function(err, res) {
    if (err) {
      var error = new Error('Error from Facebook!');
      error.innerError = err;
      throw error;
    }
    d.resolve(res.data);
  });
  return d.promise;
};

var Analysis = function(RSVPs) {
  LoadPeopleFromAPI()
    .then(function(){
      var numberOfEmails = 0;
      for (var i = 0; i < RSVPs.length; i++) {
        if(People[RSVPs[i].id]){
          numberOfEmails += 1;
        }
      }
      console.log(numberOfEmails)
    })
};

GetAttendees("1590202837863006")
  .then(Analysis)
  .fail(function (error) {
    console.log('Error! Message: ' + error.message);
  });
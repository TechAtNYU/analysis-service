'use strict';

var graph = require('fbgraph');
var request = require('request-promise');

graph.setAccessToken('');

var API_BASE_URL = 'https://api.tnyu.org/v1.0/';
var People = {};
var RSVPs = [];

var Analysis = function() {
	var numberOfEmails = 0;
	for (var i = 0; i < RSVPs.length; i++) {
		if (People[RSVPs[i].id]) {
			numberOfEmails += 1;
		}
	}
	console.log(numberOfEmails);
};

request({
	rejectUnauthorized: false,
	'headers': {'x-api-key': process.env.TNYUAPIKey},
	url: API_BASE_URL + 'people',
	timeout: 100000,
	json: true
}).then(function(peopleBody) {
	for (var i = 0; i < peopleBody.people.length; i++) {
		People[peopleBody.people[i].facebookId] = peopleBody.people[i];
	}
}).then(function(eventID) {
	graph.get(eventID + '/attending?limit=1000', function(err, res) {
		if (err) {
			var error = new Error('Error from Facebook!');
			error.innerError = err;
			throw error;
		}
		RSVPs = res.data;
	});
}).then(Analysis)
	.catch(function(error) {
		console.log('Error! Message: ' + error.message);
	});

'use strict';

var Q = require('q');
var mcapi = require('./node_modules/mailchimp-api/mailchimp');
var mc = new mcapi.Mailchimp(process.env.TNYUMailChimpAPI);

var GetAllReports = function() {
	return Q.Promise(function(resolve, reject, notify) {
		mc.campaigns.list({'status':'sent'}, function(campaignData) {
			resolve(campaignData);
		}, function(error) {
			reject(error);
		});
	});
};

var GetReportsById = function(id) {
	return Q.Promise(function(resolve, reject, notify) {
		mc.campaigns.list({campaign_id: id}, function(campaignData) {
			var campaign = campaignData.data[0];
			mc.reports.summary({cid:id}, function(reportData) {
				resolve({'campaign': campaign, 'report': reportData});
			}, function(error) {
				reject(error);
			});
		});
	});
};

GetAllReports()
	.then(function(data) {
		console.log(data.data[0]);
	})
	.catch(function(error) {
		console.log(error);
	});

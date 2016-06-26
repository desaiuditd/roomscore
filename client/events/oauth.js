/**
 * Created by udit on 26/06/16.
 */

// Subscribe the list of already authorized clients
// to auto accept
Template.authorize.onCreated(function() {
	this.subscribe('authorizedOAuth');
});

// Auto click the submit/accept button if user already
// accepted this client
Template.authorize.onRendered(function() {
	var data = this.data;
	this.autorun(function(c) {
		var user = Meteor.user();
		if (user && user.oauth && user.oauth.athorizedClients && user.oauth.athorizedClients.indexOf(data.client_id()) > -1) {
			c.stop();
			$('button').click();
		}
	});
});
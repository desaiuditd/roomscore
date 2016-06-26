/**
 * Created by udit on 26/06/16.
 */

// Get the login token to pass to oauth
// This is the best way to identify the logged user
Template.authorize.helpers({
	getToken: function() {
		return localStorage.getItem('Meteor.loginToken');
	}
});
/**
 * Created by udit on 25/06/16.
 */

Template.registerHelper('currentUserGravatar', function(size) {

	var gravatar = '';

	if ( ! size ) {
		size = 'small';
	}

	var user = Meteor.user();

	if ( user && user.profile && user.profile.picture ) {
		gravatar = '<img class="avatar ' + size + '" src="' + user.profile.picture + '" />';
	} else {
		var email = ( user && user.emails && user.emails[0].address ) || '';
		//email = Email.normalize( email );

		if ( email ) {
			gravatar = '<img class="avatar ' + size + '" src="' + Gravatar.imageUrl( email ) + '" />';
		}
	}

	return gravatar;
});

Template.registerHelper('currentUserFullName', function() {
	var user = Meteor.user();

	if ( user && user.profile && user.profile.name )
		return user.profile.name.trim();

	if ( user && user.emails && user.emails[0].address )
		return user.emails[0].address;

	return "";
});


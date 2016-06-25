/**
 * Created by udit on 25/06/16.
 */

Template.registerHelper('currentUserGravatar', function(options) {

	if ( ! options ) {
		options = {
			hash: {
				size: 'small',
				forceGravatar: false
			}
		};
	}

	if ( ! options.hash.size ) {
		options.hash.size = 'small';
	}

	if ( ! options.hash.forceGravatar ) {
		options.hash.forceGravatar = false;
	}

	var gravatar = '';

	var user = Meteor.user();

	if ( user && user.profile && user.profile.gravatar && !options.hash.forceGravatar ) {
		gravatar = '<img class="avatar ' + options.hash.size + '" src="' + user.profile.gravatar + '" />';
	} else {
		var email = ( user && user.emails && user.emails[0].address ) || '';
		//email = Email.normalize( email );

		if ( email ) {
			gravatar = '<img class="avatar ' + options.hash.size + '" src="' + Gravatar.imageUrl( email ) + '" />';
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


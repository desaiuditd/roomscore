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

Template.registerHelper('currentUserGender', function () {
	var user = Meteor.user();

	var gender = '<i class="fa fa-genderless"></i> No gender identified';

	if ( user && user.profile && user.profile.gender ) {
		switch (user.profile.gender) {
			case '1':
				gender = '<i class="fa fa-mars"></i> Male';
				break;
			case '2':
				gender = '<i class="fa fa-venus"></i> Female';
				break;
			case '3':
				gender = '<i class="fa fa-transgender"></i> Who knows ? We are not judgemental. :)';
				break;
			default:
				gender = '<i class="fa fa-genderless"></i> No gender identified';
				break;
		}
	}

	return gender;
});

Template.registerHelper('currentUserTagline', function (isPlaceholder) {
	var user = Meteor.user();

	if ( user && user.profile && user.profile.tagline ) {
		return user.profile.tagline;
	}

	return isPlaceholder ? 'What\'s on your mood ?' : '';
});
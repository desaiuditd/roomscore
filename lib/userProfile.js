/**
 * Created by udit on 25/06/16.
 */

userProfile = {
	saveGravatar: function (error, data) {
		if ( error ) {

		} else {
			var user = Meteor.user();
			if ( user ) {
				Meteor.users.update( { _id: user._id }, { $set: { 'profile.gravatar': data } } );
			}
		}
	},
	resetGravatar: function () {
		var user = Meteor.user();
		if ( user ) {
			Meteor.users.update( { _id: user._id }, { $set: { 'profile.gravatar': '' } } );
		}
	},
	saveProfile: function (data) {
		var user = Meteor.user();
		if ( user ) {
			return Meteor.users.update( { _id: user._id }, { $set: data } );
		}
	}
};
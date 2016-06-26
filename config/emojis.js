/**
 * Created by udit on 26/06/16.
 */

Meteor.startup(function() {
	if ( Meteor.isClient ) {
		Meteor.subscribe('emojis');
	}
});
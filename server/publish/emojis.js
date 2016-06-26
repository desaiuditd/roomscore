/**
 * Created by udit on 26/06/16.
 */

Meteor.publish('emojis', function() {
	// Here you can choose to publish a subset of all emojis
	// if you'd like to.
	return Emojis.find();
});
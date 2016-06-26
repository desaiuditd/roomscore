/**
 * Created by udit on 26/06/16.
 */

Meteor.publish("roommates", function () {
	if ( ! this.userId ) return this.ready();
	return Meteor.users.find( {"_id": { "$ne": this.userId }}, {fields: {emails: 1, profile: 1}} );
} );
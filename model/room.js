/**
 * Created by udit on 20/06/16.
 */

room = new Meteor.Collection( 'room' );

Schemas.coordinates = new SimpleSchema(
	{
		lat: {
			type: Number
		},
		long: {
			type: Number
		},
		postalAddress: {
			type: String
		}
	}
);

Schemas.room = new SimpleSchema(
	{
		name: {
			type: String
		},
		address: {
			type: Schemas.coordinates
		},
		timestamp: {
			type: Date,
			autoValue: function() {
				if (this.isInsert) {
					return new Date();
				} else if (this.isUpsert) {
					return {$setOnInsert: new Date()};
				} else {
					this.unset();  // Prevent user from supplying their own value
				}
			}
		}
	}
);

room.attachSchema( Schemas.room );

room.allow(
	{
		insert: function (userID, doc) {
			return ( userID ) ? true : false;
		},
		update: function (userID, doc) {
			return ( userID ) ? true : false;
		}
	}
);

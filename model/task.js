/**
 * Created by udit on 20/06/16.
 */

task = new Meteor.Collection( 'task' );

Schemas.task = new SimpleSchema(
	{
		description: {
			type: String
		},
		type: {
			type: String
		},
		status: {
			type: String
		},
		room_id: {
			type: String
		},
		author_id: {
			type: String
		},
		assignees: {
			type: [String]
		},
		contributors: {
			type: [String],
			optional: true
		},
		location: {
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
		},
		picturesForReview: {
			type: String,
			optional: true
		},
		dueDate: {
			type: Date,
			optional:true
		}
	}
);

task.attachSchema( Schemas.task );

task.allow(
	{
		insert: function (userID, doc) {
			return ( userID ) ? true : false;
		},
		update: function (userID, doc) {
			return ( userID ) ? true : false;
		}
	}
);

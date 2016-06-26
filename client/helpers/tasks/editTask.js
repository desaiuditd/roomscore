/**
 * Created by udit on 26/06/16.
 */

Template.editTask.helpers(
	{
		getRoomMates: function () {
			var user = Meteor.user();
			if ( user && user._id ) {
				var roommates = Meteor.users.find({}).fetch();
				return roommates;
			}
			return [];
		},
		isAssignee: function (cur, assignees) {
			return $.inArray(cur, assignees) != -1 ? 'selected' : '';
		}
	}
);
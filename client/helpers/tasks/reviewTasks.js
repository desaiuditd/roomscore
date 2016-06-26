/**
 * Created by udit on 25/06/16.
 */

Template.reviewTasks.helpers(
	{
		reviewGestures: {
			'swipeleft li.tinder-card': function (event, template) {
				console.log($(event.target).closest('li.tinder-card'));
				$(event.target).closest('li.tinder-card').remove();
			},
			'swiperight li.tinder-card': function (event, template) {
				console.log($(event.target).closest('li.tinder-card'));
				$(event.target).closest('li.tinder-card').remove();
			}
		},
		getTasksForReview: function () {
			return task.find({}).fetch();
		}
	}
);

/**
 * Created by udit on 25/06/16.
 */

Template.reviewTasks.helpers(
	{
		reviewGestures: {
			'swipeleft li.js-tinder-card': function (event, template) {
				$(event.target).closest('li.tinder-card').addClass('magictime tinLeftOut');
				setTimeout(function(){
					$(event.target).closest('li.tinder-card').remove();
				}, 900);
			},
			'swiperight li.js-tinder-card': function (event, template) {
				$(event.target).closest('li.tinder-card').addClass('magictime tinRightOut');
				setTimeout(function(){
					$(event.target).closest('li.tinder-card').remove();
				}, 900);
			},
			'tap .swipe-left': function (event, template) {
				$(event.target).closest('li.tinder-card').addClass('magictime tinLeftOut');
				setTimeout(function(){
					$(event.target).closest('li.tinder-card').remove();
				}, 900);
			},
			'tap .swipe-right': function (event, template) {
				$(event.target).closest('li.tinder-card').addClass('magictime tinRightOut');
				setTimeout(function(){
					$(event.target).closest('li.tinder-card').remove();
				}, 900);
			}
		},
		getTasksForReview: function () {
			return task.find({}).fetch();
		}
	}
);

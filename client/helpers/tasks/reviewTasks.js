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
				var _id = $(event.target).closest('li').data('id');
				var user = Meteor.user();
				if (user) {
					// Meteor.users.update( { _id: user._id }, { $set: { 'profile.gravatar': data } } );
					task.update({_id: _id}, {$set: {'status': "pending"}});
				}
				setTimeout(function(){
					$(event.target).closest('li.tinder-card').remove();
				}, 900);
			},
			'tap .swipe-right': function (event, template) {
				$(event.target).closest('li.tinder-card').addClass('magictime tinRightOut');
				var _id = $(event.target).closest('li').data('id');
				var user = Meteor.user();
				if (user) {
					// Meteor.users.update( { _id: user._id }, { $set: { 'profile.gravatar': data } } );
					task.update({_id: _id}, {$set: {'status': "reviewed"}});
				}
				setTimeout(function(){
					$(event.target).closest('li.tinder-card').remove();
				}, 900);
			}
		},
		getTasksForReview: function () {
			return task.find({'status': 'completed'}).fetch();
		},
		pictureForReview: function (addr) {
			return addr.length > 0;
		}
	}
);

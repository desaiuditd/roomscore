/**
 * Created by udit on 25/06/16.
 */

Template.myProfile.helpers(
	{
		profileGestures: {
			'tap #change-gravatar': function(event, template) {
				MeteorCamera.getPicture([], userProfile.saveGravatar);
			},
			'press #change-gravatar': function(event, template) {
				$('#reset-gravatar-modal').modal('show');
			},
			'tap #reset-gravatar': function (event, template) {
				userProfile.resetGravatar();
				$('#reset-gravatar-modal').modal('hide');
			},
			'press #display-name': function (event, template) {
				$(event.target).hide();
				$('#edit-display-name').removeClass('hide');
			},
			'tap #edit-profile': function (event, template) {
				$('.view').toggle();
				$('.edit').toggle();
			}
		}
	}
);
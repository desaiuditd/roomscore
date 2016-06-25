/**
 * Created by udit on 25/06/16.
 */

Template.myProfile.events(
	{
		'click #change-gravatar': function (event, template) {
			MeteorCamera.getPicture([], userProfile.saveGravatar);
		}
	}
);
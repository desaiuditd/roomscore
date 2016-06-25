/**
 * Created by udit on 25/06/16.
 */

Template.myProfile.events(
	{
		'submit #edit-display-name': function (event, template) {
			event.preventDefault();
			var displayName = $(event.target).find('input[name="display-name"]').val();
			userProfile.saveDisplayName(displayName);
			$(event.target).addClass('hide');
			$('#display-name').show();
			return false;
		}
	}
);
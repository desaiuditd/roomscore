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
			'tap #edit-profile': function (event, template) {
				$('.view').toggle();
				$('.edit').toggle();
			},
			'tap #save-profile': function (event, template) {

				var displayName = $("#form-profile").find('input[name="display-name"]').val();
				var tagline = $("#form-profile").find('input[name="tagline"]').val();;
				var gender = $("#form-profile").find('select[name="gender"]').val();
				var dob = $("#form-profile").find('input[name="dob"]').val();
				var phone = '';

				var data = {
					'profile.name': displayName,
					'profile.tagline': tagline,
					'profile.gender': gender,
					'profile.dob': dob,
					'profile.phone': phone
				};

				var profile = userProfile.saveProfile(data);

				if ( profile ) {
					$('.view').toggle();
					$('.edit').toggle();
				} else {
					// Todo Display error.
				}
			},
			'tap #cancel-profile': function (event, template) {
				$('.view').toggle();
				$('.edit').toggle();
			}
		},
		isGender: function (gender) {
			var user = Meteor.user();
			if ( user && user.profile && user.profile.gender ) {
				return gender == user.profile.gender ? 'selected' : '';
			}
			return '';
		}
	}
);
/**
 * Created by udit on 26/06/16.
 */

Template.editTask.onRendered(function () {
		this.autorun(function () {
			$('.roommate-list,#taskType').select2();
			$('.dob-datepicker').datepicker({
				autoclose: true
			});
		})
	}
);

Template.editTask.events(
	{
		'click .toggle-button button': function () {
			// event.preventDefault();
			$('.toggle-button').toggleClass('toggle-button-selected');
			$('#frequency').toggle();
			return false;
		},
		'change #taskType': function () {
			if ($('#taskType').val() == "Chores") {
				$('#shopOption').hide();
				$('#choresOption').show();
			} else {
				$('#choresOption').hide();
				$('#shopOption').show();
			}
			return false;
		},
	}
);
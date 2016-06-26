/**
 * Created by udit on 25/06/16.
 */

Template.myProfile.events(
	{

	}
);

Template.myProfile.onRendered( function () {
	this.autorun( function () {
		$('.gender-select').select2({
			templateResult: function (gender) {
				if ( gender && gender.element && gender.element.innerHTML ) {
					return $('<span>' + gender.element.innerHTML + '</span>');
				}
				return gender.text;
			},
			templateSelection: function (gender) {
				if ( gender && gender.element && gender.element.innerHTML ) {
					return $('<span>' + gender.element.innerHTML + '</span>');
				}
				return gender.text;
			}
		});
	} );
} );

/**
 * Created by udit on 26/06/16.
 */

Template.createTask.onCreated(function () {
	var self = this;
	self.autorun(function() {
		self.subscribe("task");
	});
});
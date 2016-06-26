/**
 * Created by udit on 12/12/15.
 */
var currentDate = new Date();
Template.footer.helpers( {
	currentYear: currentDate.getFullYear(),
	showAddTaskButton: function () {
		var context = FlowRouter.current();
		var flag = false;
		switch(context.route.name) {
			case 'home':
			case 'tasks':
				flag = true;
				break;
		}
		return flag;
	}
} );



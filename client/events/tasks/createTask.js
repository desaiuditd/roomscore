/**
 * Created by Mj on 25-Jun-16.
 */

Template.reviewTasks.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe("task");
    });
});

Template.createTask.events(
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
        'submit #form-create-task': function (event, template) {
            event.preventDefault();
            var user = Meteor.user();
            var flag = 0;
            var description = $('#inputEmail3').val();
            var type = $('#taskType').val().toLowerCase();
            var assignees = $('#mySubjects').val();
            var roomId = 1;
            var authId = user._id;
            var status = "pending";
            var location = {};
            var dueDate = $('#dueDate').val();

            if (type == "chores") {
                dueDate = $('#dueDate').val();
            }
            var data = {
                'description': description,
                'type': type,
                'status': status,
                'room_id': roomId,
                'author_id': authId,
                'assignees': assignees,
                'location': location,
                'dueDate': dueDate
            };

            task.insert(data);

            FlowRouter.go('tasks');

            return false;
        }
    }
);
Template.createTask.onRendered(function () {
    this.autorun(function () {
        $('.roommate-list,#taskType').select2();
        $('.dob-datepicker').datepicker({
            autoclose: true
        });
    })
    }
);
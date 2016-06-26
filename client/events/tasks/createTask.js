/**
 * Created by Mj on 25-Jun-16.
 */

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
        'submit #addTask': function () {
            var flag = 0;
            var description = $('#inputEmail3').val();
            var type = $('taskType').val().toLowerCase();
            var assignees = $('#roommateList').val();
            var roomId = user.room_id;
            var authId = user._id;
            var status = "pending";
            var location = [];
            var dueDate = "";

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


        }
    }
);
Template.createTask.onRendered(function () {
    this.autorun(function () {
        $('.roommate-list').select2();
    })
    }
);
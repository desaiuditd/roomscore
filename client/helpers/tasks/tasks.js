/**
 * Created by Mj on 25-Jun-16.
 */

Template.tasks.helpers(
    {
        showDelete: {
            'swipeleft li.each-task':function (event, template) {
                console.log($(event.target).closest('li.each-task button'));
                $(event.target).closest('li').children('button').show();
            }
        },
        getTasks: function () {
            return task.find().fetch();
        },
        isChore: function (type) {
            if (type == "chores")
                return true;
            return false;
        }
    }
);
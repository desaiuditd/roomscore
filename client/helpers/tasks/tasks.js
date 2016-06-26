/**
 * Created by Mj on 25-Jun-16.
 */

Template.tasks.helpers(
    {
        showDelete: {
            'panleft li.each-task':function (event, template) {
                event.preventDefault();
                console.log("12");
                $(event.target).closest('li').children('button').show();
                // $(event.target).closest('li').animate("left": "-30px")
            },
            'panright li.each-task':function (event, template) {
                event.preventDefault();
                $(event.target).closest('li').children('button').hide();
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
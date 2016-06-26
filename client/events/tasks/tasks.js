/**
 * Created by Mj on 25-Jun-16.
 */

Template.tasks.events({
    'click li.each-task': function (event) {
        event.stopPropagation();
        console.log($(event.target).closest('li').children('span').text());
    }
});
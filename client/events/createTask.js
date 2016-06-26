/**
 * Created by Mj on 25-Jun-16.
 */

Template.createTask.events(
    {
        'click .toggle-button button': function (event) {
            // event.preventDefault();
            $('.toggle-button').toggleClass('toggle-button-selected');
            $('#frequency').toggle();
            return false;
        },
        
    }
);
Template.createTask.onRendered(function () {
    this.autorun(function () {
        $('.roommate-list').select2();
    })
    }
);
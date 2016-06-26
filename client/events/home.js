/**
 * Created by Mj on 26-Jun-16.
 */

Template.home.events(
    {
        
    }
);

Template.home.onCreated(function () {
    Meteor.subscribe('task');
});
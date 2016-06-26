/**
 * Created by Kuldeep on 6/25/2016.
 */

Template.tasks.onCreated(function () {
    
   Meteor.subscribe('task');
}); 
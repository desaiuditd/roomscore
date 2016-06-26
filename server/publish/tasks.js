/**
 * Created by Kuldeep on 6/25/2016.
 */

Meteor.publish("task", function () {
    return task.find({}); 
});
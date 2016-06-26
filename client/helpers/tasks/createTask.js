/**
 * Created by Mj on 25-Jun-16.
 */

Template.createTask.helpers({
    getRoomMates: function () {
        var user = Meteor.user();
        if ( user && user._id ) {
            var roommates = Meteor.users.find({"_id": { "$ne": user._id }}).fetch();
            return roommates;
        }
        return [];
    },
    chores: function () {
        if ($('#taskType').val() == "Chores")
            return true;
        else
            return false;
    }
});
/**
 * Created by Mj on 25-Jun-16.
 */

Template.createTask.helpers({
    roommate: function () {
        // To return all roommates.
        var user = Meteor.user();
        var allRoommates = [{'name':'Rohit Jacob'}, {'name':'Udit Desai'}, {'name':'Mahendra Mhatre'}, {'name':'Kuldeep Ghate'}];
        return allRoommates;
    },
    chores: function () {
        
    }
});
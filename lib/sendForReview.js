/**
 * Created by Mj on 26-Jun-16.
 */

sendForReview = {
    savePic: function (error, data) {
        if (error) {

        } else {
            var user = Meteor.user();
            var taskId = Session.get("CompletedId");
            if (user) {
                // Meteor.users.update( { _id: user._id }, { $set: { 'profile.gravatar': data } } );
                task.update({_id: taskId}, {$set: {'picturesForReview': data, 'contributors': [user._id], 'status': "completed"}});
            }
        }
        FlowRouter.go('home');
    }
}
/**
 * Created by Kuldeep on 6/25/2016.
 */

Template.tasks.helpers(
    {
        getTasks : function(){
            return task.find().fetch();
        }
    }
);
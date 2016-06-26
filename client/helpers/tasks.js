/**
 * Created by Kuldeep on 6/25/2016.
 */

Template.tasks.helpers(
    {
        getTasks : function(){
            if(task.find().count() === 0)
                console.log("here : "+task.find().fetch());
            return task.find().fetch();
        }
    }
);
/**
 * Created by Mj on 26-Jun-16.
 */

Template.home.helpers(
    {

        getTasks: function () {
            var allTasks =  task.find({"status": "pending"}, {"sort" : ['dueDate', 'desc']}).fetch();
            var resultTasks = [];
            for (i = 0; i < allTasks.length; i++) {
                if (allTasks[i].type == "chores") {
                    var date = allTasks[i].dueDate.getTime();
                    var currDate = new Date();
                    if (Math.floor(Math.abs((date - currDate.getTime()) / (1000 * 60 * 60 * 24))) <= 7) {
                        resultTasks.push(allTasks[i]);
                    }
                }
            }
            for (i = 0; i < allTasks.length; i++) {
                if (allTasks[i].type != "chores") {
                    resultTasks.push(allTasks[i]);
                }
            }
            return resultTasks;

        },
        showDelete: {
            'panleft li.each-taskDash':function (event, template) {
                event.preventDefault();
                console.log("12");
                $(event.target).closest('li').children('button').show();
                $(event.target).closest('li').children('#dueDate').hide();
                $(event.target).closest('li').children('itemList').animate({left: "-20%"}, "slow");
            },
            'panright li.each-taskDash':function (event, template) {
                event.preventDefault();
                $(event.target).closest('li').children('button').hide();
                $(event.target).closest('li').children('#dueDate').show();
                $(event.target).closest('li').children('itemList').animate({left: "0"}, "slow");
            },
            'tap li.each-taskDash .btn-success': function (event, template) {
                event.preventDefault();
                var _id = $(event.target).closest('li').data('id');
                Session.set("CompletedId", _id);
                console.log(_id);
                MeteorCamera.getPicture([], sendForReview.savePic);
            },
            'tap li.each-taskDash .itemList': function (event, template) {
                event.preventDefault();
                var _id = $(event.target).closest('li').data('id');
                FlowRouter.go('editTask', {_id: _id});
            }

        },
        isChore: function (type) {
            return type == "chores";
            
        },
        convertDate: function (date) {
            console.log(date);

            var currentDate = new Date();
            var diff = Math.floor(Math.abs((date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)));
            console.log(diff);
            var stringDate;
            if (diff == 1) {
                stringDate = "Due today";
            } else if (diff == 2){
                stringDate = "Due tomorrow";
            } else {
                stringDate = "Due in " + diff + " days";
            }
            return stringDate;
            // date.getDate();

        }
    }
);
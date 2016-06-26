/**
 * Created by Mj on 25-Jun-16.
 */

Template.tasks.helpers(
    {
        showDelete: {
            'panleft li.each-task':function (event, template) {
                event.preventDefault();
                console.log("12");
                $(event.target).closest('li').children('button').show();
                $(event.target).closest('li').children('#dueDate').hide();
                $(event.target).closest('li').children('itemList').animate({left: "-20%"}, "slow");
            },
            'panright li.each-task':function (event, template) {
                event.preventDefault();
                $(event.target).closest('li').children('button').hide();
                $(event.target).closest('li').children('#dueDate').show();
                $(event.target).closest('li').children('itemList').animate({left: "0"}, "slow");
            },
          'tap li.each-task .btn-success': function (event, template) {
            event.preventDefault();
            var _id = $(event.target).closest('li').data('id');
            Session.set("CompletedId", _id);
            console.log(_id);
            MeteorCamera.getPicture([], sendForReview.savePic);
          },
            'tap li.each-task .itemList': function (event, template) {
              var _id = $(event.target).closest('li').data('id');
              FlowRouter.go('editTask', {_id: _id});
            }
        },
        getTasks: function () {
            return task.find({"status": "pending"}).fetch();
        },
        isChore: function (type) {
            if (type == "chores")
                return true;
            return false;
        },
        convertDate: function (date) {
            console.log(date);

            var currentDate = new Date();
            var diff = Math.floor(Math.abs((date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)));
            console.log(diff);
            var stringDate = "Due in " + diff + " days";
            return stringDate;
            // date.getDate();

        }
    }
);
/**
 * Created by Mj on 25-Jun-16.
 */

Template.tasks.helpers(
    {
        showDelete: {
            'swipeleft li.each-task':function (event, template) {
                console.log($(event.target).closest('li.each-task button'));
                $(event.target).closest('li').children('button').show();
            }
        },
        getTasks: function () {

            // if(task.find().count() === 0)
            //     console.log("here : "+task.find().fetch());
            // return task.find().fetch();

            return [
                {description: 'Test 1',
                    type: 'chores',
                    status: 'completed',
                    room_id: '1',
                    author_id: '',
                    assignees: ['rBdxcvp44s4nw4Bts'],
                    contributors: ['rBdxcvp44s4nw4Bts']},
                {description: 'Test 3',
                    type: 'shopping',
                    status: 'completed',
                    room_id: '1',
                    author_id: '',
                    assignees: ['rBdxcvp44s4nw4Bts'],
                    contributors: ['rBdxcvp44s4nw4Bts']},
                {description: 'Test 2',
                    type: 'shopping',
                    status: 'completed',
                    room_id: '1',
                    author_id: '',
                    assignees: ['rBdxcvp44s4nw4Bts'],
                    contributors: ['rBdxcvp44s4nw4Bts']}
            ];
        },
        isChore: function (type) {
            if (type == "chores")
                return true;
            return false;
        }
    }
);
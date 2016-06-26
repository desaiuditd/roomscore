/**
 * Created by Mj on 25-Jun-16.
 */

Template.tasks.helpers(
    {
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
        },
        showDelete: {
            'swipeleft tr.each-task':function (event, template) {
                $(event.target).closest('tr.each-task')
            }
        }
    }
);
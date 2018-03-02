document.addEventListener('DOMContentLoaded', function() {

    var taskInput = document.querySelector('#taskInput');
    var addTaskButton = document.querySelector('#addTaskButton');
    var removeFinishedTasksButton = document.querySelector('#removeFinishedTasksButton');
    var taskList = document.querySelector('#taskList');
    var listItems = taskList.children;
    var counter = document.querySelector('#counter');
    var count = 0;

    //add new task to list
    addTaskButton.addEventListener('click', function(event) {

        //check if input is not too short or too long
        if (taskInput.value.length >= 5 && taskInput.value.length <= 100) {
            taskList.appendChild(createNewTask(taskInput));
        }

        //clear input
        taskInput.value = '';


    });

    //remove all finished tasks upon clicking 'Remove finsihed tasks'
    removeFinishedTasksButton.addEventListener('click', function(event) {
        removeFinishedTasks(listItems);
    });

    //--------------Defining functions called above ----------------
    function createNewTask(taskInput) {
        var newTask = document.createElement('li');
        var newTaskHeader = document.createElement('h1');
        var newTaskButtonDelete = document.createElement('button');
        var newTaskButtonComplete = document.createElement('button');

        newTaskButtonDelete.innerText = 'Delete';
        newTaskButtonDelete.classList.add('deleteTaskButton');
        newTaskButtonComplete.innerText = 'Complete';
        newTaskButtonComplete.classList.add('completeTaskButton');
        newTaskHeader.innerText = taskInput.value;
        newTask.appendChild(newTaskHeader);
        newTask.appendChild(newTaskButtonDelete);
        newTask.appendChild(newTaskButtonComplete);

        //cross out complete tasks on click of 'Complete' button
        newTaskButtonComplete.addEventListener('click',function(event) {

            //if it is not completed
            var taskText = this.parentElement.querySelector('h1');
            if (this.parentElement.className.indexOf('done') == -1) {
                taskText.style.textDecoration = 'line-through';
                taskText.style.color = 'grey';
                this.parentElement.classList.add('done');
                count -= 1;
                counter.innerText = count;
            } else {
                taskText.style.textDecoration = 'none';
                taskText.style.color = 'initial';
                this.parentElement.classList.remove('done');
                count += 1;
                counter.innerText = count;
            }
        });

        //remove list item on click of 'Delete' button
        newTaskButtonDelete.addEventListener('click',function(event) {
            this.parentElement.parentElement.removeChild(this.parentElement);
            count -= 1;
            counter.innerText = count;
        });

        count += 1;
        counter.innerText = count;

        return newTask;
    }

    function removeFinishedTasks(listItems) {
        [...listItems].forEach(function(element) {
           if (element.className.indexOf('done') !== -1) {
               element.parentElement.removeChild(element);
           }
        });
    }
});












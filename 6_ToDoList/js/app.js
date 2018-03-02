document.addEventListener('DOMContentLoaded', function() {

    var taskInput = document.querySelector('#taskInput');
    var addTaskButton = document.querySelector('#addTaskButton');
    var removeFinishedTasksButton = document.querySelector('#removeFinishedTasksButton');
    var taskList = document.querySelector('#taskList');
    var listItems = taskList.children;

    //add new task to list
    addTaskButton.addEventListener('click', function(event) {
        taskList.appendChild(createNewTask(taskInput));
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
            var taskText = this.parentElement.querySelector('h1');
            taskText.style.textDecoration = 'line-through';
            taskText.style.color = 'grey';
            this.parentElement.classList.add('done');
        });

        //remove list item on click of 'Delete' button
        newTaskButtonDelete.addEventListener('click',function(event) {
            this.parentElement.parentElement.removeChild(this.parentElement);
        });

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












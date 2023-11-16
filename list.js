function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.innerHTML = taskInput.value;
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function (event) {
        // Prevent the click event from propagating to the taskText element
        event.stopPropagation();
        deleteTask(this);
    };

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Add click event to mark task as completed
    taskText.onclick = function () {
        this.classList.toggle("completed");
    };

    taskInput.value = "";
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
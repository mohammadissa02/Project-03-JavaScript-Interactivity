const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

taskInput.addEventListener("keydown", function(event)
 {
    if (event.key === "Enter") 
    {taskForm.requestSubmit();}
});

taskForm.addEventListener("submit", function(event)
 {
    event.preventDefault();

    const task = document.createElement("li");
    task.textContent = taskInput.value.trim() + " ";

    task.addEventListener("click", function()
     {
        task.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function(event)
     {
        event.stopPropagation();
        task.remove();
        taskCount.textContent = taskList.children.length;
    });

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskCount.textContent = taskList.children.length;
    taskInput.value = "";
    taskInput.focus();
});
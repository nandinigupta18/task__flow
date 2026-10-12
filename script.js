
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "task-text";

    const status = document.createElement("span");
    status.className = "status pending";
    status.textContent = "Pending";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-btn pending";
    toggleBtn.textContent = "Complete";

    toggleBtn.addEventListener("click", function () {
        const isCompleted =
            taskText.classList.toggle("completed");

        if (isCompleted) {
            status.textContent = "Completed";
            status.className = "status completed";

            toggleBtn.textContent = "Undo";
            toggleBtn.className = "toggle-btn completed";
        } else {
            status.textContent = "Pending";
            status.className = "status pending";

            toggleBtn.textContent = "Complete";
            toggleBtn.className = "toggle-btn pending";
        }
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(status);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}



document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");
    const prioritySelect = document.getElementById("priority-select");
    const statusSelect = document.getElementById("status-select");


    addButton.addEventListener("click", function () {
        if (taskInput.value == "") {
            alert("Please Add Something To Do")
        } 
    })

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const priority = prioritySelect.value;
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-text ${priority}">${taskText}</span>
                <span class="status">Pending</span>
                <button class="complete-button">Complete</button>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const completeButton = listItem.querySelector(".complete-button");
            const editButton = listItem.querySelector(".edit-button");
            const deleteButton = listItem.querySelector(".delete-button");

            completeButton.addEventListener("click", function () {
                listItem.querySelector(".status").textContent = "Completed";
                listItem.querySelector(".task-text").classList.add("completed");
                completeButton.style.display = "none";
            });

            editButton.addEventListener("click", function () {
                const newText = prompt("Edit the task:", taskText);
                if (newText !== null) {
                    listItem.querySelector(".task-text").textContent = newText;
                }
            });

            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    // Filter and sort tasks
    statusSelect.addEventListener("change", function () {
        const statusFilter = statusSelect.value;
        const priorityFilter = prioritySelect.value;

        taskList.querySelectorAll("li").forEach(function (taskItem) {
            const status = taskItem.querySelector(".status").textContent.toLowerCase();
            const priority = taskItem.querySelector(".task-text").classList[1];

            taskItem.style.display = "block";

            if ((statusFilter !== "all" && status !== statusFilter) || (priorityFilter !== "all" && priority !== priorityFilter)) {
                taskItem.style.display = "none";
            }
        });
    });
});

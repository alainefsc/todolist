// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("due-date");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value;
      const dueDateText = dueDateInput.value;
      if (taskText.trim() !== "") {
        const li = document.createElement("li");
  
        // Incluir a data de conclusão na tarefa
        li.innerHTML = `${taskText} (Concluir em ${dueDateText}) <button class="delete-task">Delete</button>`;
  
        taskList.appendChild(li);
        taskInput.value = "";
        dueDateInput.value = "";
  
        const deleteButton = li.querySelector(".delete-task");
        deleteButton.addEventListener("click", function () {
          taskList.removeChild(li);
        });
      }
    });
  });
  
  
  
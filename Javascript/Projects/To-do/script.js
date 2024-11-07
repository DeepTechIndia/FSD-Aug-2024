document.addEventListener("DOMContentLoaded", () => {
  const newTaskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", addTask);

  function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      const taskSpan = document.createElement("span");

      taskSpan.textContent = taskText;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit-button";
      editButton.addEventListener("click", () => editTask(listItem, taskSpan));

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", () => deleteTask(listItem));

      listItem.appendChild(taskSpan);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);

      newTaskInput.value = "";
    }
  }

  function editTask(listItem, taskSpan) {
    const currentText = taskSpan.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;

    listItem.replaceChild(input, taskSpan);
    input.focus();

    input.addEventListener("blur", () => {
      taskSpan.textContent = input.value.trim() || currentText;
      listItem.replaceChild(taskSpan, input);
    });
  }

  function deleteTask(listItem) {
    taskList.removeChild(listItem);
  }
});

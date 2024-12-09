class Todolist {
    constructor() {
      this.tasks = [];
      this.filteredTasks = []; // Для фильтрации
      this.filterMode = "all"; // "all", "completed", "uncompleted"
      this.taskListElement = document.getElementById("taskList");
      this.addTaskButton = document.getElementById("addTaskButton");
      this.taskInput = document.getElementById("taskInput");
  
      this.addTaskButton.addEventListener("click", () => this.addTask());
      document.getElementById("showAll").addEventListener("click", () => this.filterTasks("all"));
      document.getElementById("showCompleted").addEventListener("click", () => this.filterTasks("completed"));
      document.getElementById("showUncompleted").addEventListener("click", () => this.filterTasks("uncompleted"));
    }
  
    addTask() {
      const taskName = this.taskInput.value.trim();
      if (taskName === "") {
        alert("Введите задачу!");
        return;
      }
  
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
      };
  
      this.tasks.push(newTask);
      this.taskInput.value = "";
      this.renderTasks();
    }
  
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.renderTasks();
    }
  
    toggleTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
        this.renderTasks();
      }
    }
  
    editTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        const newTaskName = prompt("Введите новое название задачи:", task.name);
        if (newTaskName && newTaskName.trim() !== "") {
          task.name = newTaskName.trim();
          this.renderTasks();
        }
      }
    }
  
    filterTasks(mode) {
      this.filterMode = mode;
  
      switch (mode) {
        case "completed":
          this.filteredTasks = this.tasks.filter(task => task.completed);
          break;
        case "uncompleted":
          this.filteredTasks = this.tasks.filter(task => !task.completed);
          break;
        default:
          this.filteredTasks = this.tasks;
          break;
      }
  
      this.renderTasks();
    }
  
    renderTasks() {
      const tasksToRender = this.filterMode === "all" ? this.tasks : this.filteredTasks;
  
      this.taskListElement.innerHTML = "";
  
      tasksToRender.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.className = `task ${task.completed ? "completed" : ""}`;
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => this.toggleTask(task.id));
  
        const taskName = document.createElement("span");
        taskName.textContent = task.name;
  
        const editButton = document.createElement("button");
        editButton.textContent = "Редактировать";
        editButton.addEventListener("click", () => this.editTask(task.id));
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => this.deleteTask(task.id));
  
        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskName);
        taskElement.appendChild(editButton);
        taskElement.appendChild(deleteButton);
  
        this.taskListElement.appendChild(taskElement);
      });
    }
  }
  
  
  const todolist = new Todolist();
  
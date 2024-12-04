
class Task {
    constructor(taskId, title, completed = false) {
        this.taskId = taskId; 
        this.title = title; 
        this.completed = completed; 
    }


    setTitle(newTitle) {
        this.title = newTitle;
    }


    toggleCompleted() {
        this.completed = !this.completed;
    }
}

class Todolist {
    constructor(listId, name) {
        this.listId = listId; 
        this.name = name; 
        this.tasks = []; 
    }


    setName(newName) {
        this.name = newName;
    }

    
    addTask(task) {
        this.tasks.push(task);
    }


    filterTasksByCompletion(completed = true) {
        return this.tasks.filter(task => task.completed === completed);
    }
}


const task1 = new Task(1, "Сходить в магазин");
const task2 = new Task(2, "Позвонить другу", true);
const task3 = new Task(3, "Выучить JavaScript");


const myTodolist = new Todolist(1, "Мои задачи");


myTodolist.addTask(task1);
myTodolist.addTask(task2);
myTodolist.addTask(task3);

task1.toggleCompleted();


const completedTasks = myTodolist.filterTasksByCompletion(true);
console.log("Выполненные задачи:", completedTasks);

const notCompletedTasks = myTodolist.filterTasksByCompletion(false);
console.log("Невыполненные задачи:", notCompletedTasks);


console.log("Все задачи:", myTodolist.tasks);

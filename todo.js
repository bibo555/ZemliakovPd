const TASK_STATUSES = ['todo', 'inProgress', 'done'];
const tasks = [];
let taskIdCounter = 1;


function addTask(description, status = 'todo') {
    // Проверка типа аргументов
    if (typeof description !== 'string' || (status && typeof status !== 'string')) {
        throw new Error('INVALIDE_ARGUMENT');
    }
    
    if (status && !TASK_STATUSES.includes(status)) {
        throw new Error('INVALIDE_STATUS');
    }
    
    tasks.push({ id: taskIdCounter++, description, status });
}


function deleteTask(id) {
    // Проверка типа аргумента
    if (typeof id !== 'number') {
        throw new Error('INVALIDE_ARGUMENT');
    }
    
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false; // Возврат false, если задача не найдена
}


function changeStatus(id, status) {
    
    if (typeof id !== 'number' || typeof status !== 'string') {
        throw new Error('INVALIDE_ARGUMENT');
    }
    if (!TASK_STATUSES.includes(status)) {
        throw new Error('INVALIDE_STATUS');
    }
    
    const task = tasks.find(task => task.id === id);
    if (task) {
        if (task.status === status) {
            return false; 
        }
        task.status = status;
        return true;
    }
    return false; 
}


function showList() {
    const groupedTasks = {
        todo: [],
        inProgress: [],
        done: []
    };
    
    tasks.forEach(task => {
        groupedTasks[task.status].push(`${task.id} "${task.description}"`);
    });

    
    console.log("Todo:");
    console.log(groupedTasks.todo.length > 0 ? "  " + groupedTasks.todo.join(",\n  ") : "  -");

    console.log("In Progress:");
    console.log(groupedTasks.inProgress.length > 0 ? "  " + groupedTasks.inProgress.join(",\n  ") : "  -");

    console.log("Done:");
    console.log(groupedTasks.done.length > 0 ? "  " + groupedTasks.done.join(",\n  ") : "  -");
}


try {
    addTask('create a task'); 
    addTask('make a bed', 'todo');
    addTask('write a post', 'inProgress');

    console.log(deleteTask(1)); 
    console.log(deleteTask(1)); 

    console.log(changeStatus(2, 'inProgress')); 
    console.log(changeStatus(2, 'inProgress')); 
    console.log(changeStatus(3, 'done')); 

    showList(); 
} catch (error) {
    console.error(error.message);
}



export function createTaskElement(taskText, priority) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
  
    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteBtn);
  
    return taskItem;
  }
  
  export function appendTaskToList(taskElement, priority) {
    const list = priority === 'HIGH' 
      ? document.getElementById('high-priority-tasks') 
      : document.getElementById('low-priority-tasks');
    
    list.appendChild(taskElement);
  }
  
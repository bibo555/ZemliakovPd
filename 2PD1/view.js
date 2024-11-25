

export function createTaskElement(taskText, priority) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
  
        // Кнопка удаления
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = taskText;
  

      
      // Добавляем элементы в задачу
     taskItem.appendChild(checkbox); // Чекбокс слева
           taskItem.appendChild(taskTextSpan); // Текст задачи в центре
        taskItem.appendChild(deleteBtn); // Кнопка удаления справа
      
  
    return taskItem;
  }
  
  export function appendTaskToList(taskElement, priority) {
    const list = priority === 'HIGH' 
      ? document.getElementById('high-priority-tasks') 
      : document.getElementById('low-priority-tasks');
    
    list.appendChild(taskElement);
  }
  
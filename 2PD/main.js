document.addEventListener('DOMContentLoaded', () => {
  // Элементы для High-priority задач
  const highTaskInput = document.getElementById('task-input');  // Исправлено
  const addHighTaskBtn = document.getElementById('add-task-btn'); // Исправлено

  if (!highTaskInput || !addHighTaskBtn) {
    console.error("Elements for High-priority tasks not found!");
    return;
  }

  // Элементы для Low-priority задач
  const lowTaskInput = document.getElementById('low-task-input');
  const addLowTaskBtn = document.getElementById('add-low-task-btn');

  if (!lowTaskInput || !addLowTaskBtn) {
    console.error("Elements for Low-priority tasks not found!");
    return;
  }

  // Обработчики для High-priority задач
  addHighTaskBtn.addEventListener('click', () => handleAddTask(highTaskInput, 'HIGH'));
  highTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddTask(highTaskInput, 'HIGH');
  });

  // Обработчики для Low-priority задач
  addLowTaskBtn.addEventListener('click', () => handleAddTask(lowTaskInput, 'LOW'));
  lowTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddTask(lowTaskInput, 'LOW');
  });

  // Универсальная функция для добавления задач
  function handleAddTask(taskInput, priority) {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const taskElement = createTaskElement(taskText); // Создаём DOM-элемент задачи
    attachTaskEvents(taskElement); // Добавляем события
    appendTaskToList(taskElement, priority); // Вставляем в соответствующий список

    taskInput.value = ''; // Очищаем поле ввода
  }

  // Создание DOM-элемента задачи
  function createTaskElement(taskText) {
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

  // Добавление задачи в соответствующий список
  function appendTaskToList(taskElement, priority) {
    const list = priority === 'HIGH' 
      ? document.getElementById('high-priority-tasks') 
      : document.getElementById('low-priority-tasks');
    
    list.appendChild(taskElement);
  }

  // Добавление событий на удаление и выполнение
  function attachTaskEvents(taskElement) {
    const checkbox = taskElement.querySelector('.task-checkbox');
    const deleteBtn = taskElement.querySelector('.delete-btn');

    checkbox.addEventListener('change', () => {
      taskElement.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
      taskElement.remove();
    });
  }
});


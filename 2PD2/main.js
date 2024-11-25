document.addEventListener('DOMContentLoaded', () => {
  // Элементы для High-priority задач
  const highTaskInput = document.getElementById('task-input');
  const highTaskForm = highTaskInput.closest('form');

  // Элементы для Low-priority задач
  const lowTaskInput = document.getElementById('low-task-input');
  const lowTaskForm = lowTaskInput.closest('form');

  if (!highTaskInput || !highTaskForm || !lowTaskInput || !lowTaskForm) {
    console.error("Elements for tasks not found!");
    return;
  }

  // Обработчик формы High-priority
  highTaskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем отправку формы
    handleAddTask(highTaskInput, 'HIGH');
  });

  // Обработчик формы Low-priority
  lowTaskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем отправку формы
    handleAddTask(lowTaskInput, 'LOW');
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

  function createTaskElement(taskText) {
    const taskItem = document.createElement('li');
  
    // Чекбокс
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
  
    // Текст задачи
    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = taskText;
  
    // Кнопка удаления
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
  
    // Добавляем элементы в задачу
    taskItem.appendChild(checkbox); // Чекбокс слева
    taskItem.appendChild(taskTextSpan); // Текст задачи в центре
    taskItem.appendChild(deleteBtn); // Кнопка удаления справа
  
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


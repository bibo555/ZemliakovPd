const DOMAIN = 'malivartti.fvds.ru';
let ws = null;

// DOM Elements
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendMessageButton = document.getElementById('send-message');
const logoutButton = document.getElementById('logout');

// Получение токена и имени
const token = localStorage.getItem('token');
const username = localStorage.getItem('username');

// Проверка, авторизован ли пользователь
if (!token || !username) {
  window.location.href = 'auth.html';
}

// Загрузка старых сообщений
async function loadMessages() {
  try {
    const response = await axios.get(`https://${DOMAIN}/api/messages`);
    messagesContainer.innerHTML = response.data.messages
      .map(msg => `<p><strong>${msg.userName}:</strong> ${msg.text}</p>`)
      .join('');
  } catch (error) {
    console.error('Ошибка загрузки сообщений', error);
  }
}

// Подключение к WebSocket
function connectWebSocket() {
  ws = new WebSocket(`wss://${DOMAIN}/websockets?token=${token}`);

  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    messagesContainer.innerHTML += `<p><strong>${message.userName}:</strong> ${message.text}</p>`;
  };

  ws.onopen = () => {
    console.log('WebSocket подключен');
  };

  ws.onclose = () => {
    console.log('WebSocket отключен');
  };
}

// Отправка сообщения
sendMessageButton.addEventListener('click', () => {
  const text = messageInput.value;
  if (!text) return;

  ws.send(JSON.stringify({ text }));
  messageInput.value = '';
});

// Выход
logoutButton.addEventListener('click', () => {
  localStorage.clear();
  window.location.href = 'auth.html';
});

// Инициализация
loadMessages();
connectWebSocket();

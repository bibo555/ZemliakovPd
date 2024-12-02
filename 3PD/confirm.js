const DOMAIN = 'malivartti.fvds.ru';

// DOM Elements
const usernameInput = document.getElementById('username');
const codeInput = document.getElementById('code');
const confirmError = document.getElementById('confirm-error');
const confirmButton = document.getElementById('confirm');

// Event Listener
confirmButton.addEventListener('click', async () => {
  try {
    const username = usernameInput.value;
    const code = codeInput.value;

    // Отправка PATCH запроса
    const response = await axios.patch(`https://${DOMAIN}/api/user`, { userName: username }, {
      headers: { Authorization: `Bearer ${code}` },
    });

    if (response.data.status === 'ok') {
      localStorage.setItem('token', code); // Сохраняем токен
      localStorage.setItem('username', username); // Сохраняем имя
      window.location.href = 'chat.html';
    } else {
      confirmError.textContent = 'Неверный код';
    }
  } catch (error) {
    confirmError.textContent = 'Ошибка подтверждения';
  }
});

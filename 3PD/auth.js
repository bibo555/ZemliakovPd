const DOMAIN = 'malivartti.fvds.ru';

// DOM Elements
const emailInput = document.getElementById('email');
const authError = document.getElementById('auth-error');
const getCodeButton = document.getElementById('get-code');
const enterCodeButton = document.getElementById('enter-code');

// Отправить код на почту
getCodeButton.addEventListener('click', async () => {
  try {
    const email = emailInput.value;

    // Отправка POST запроса
    const response = await axios.post(`https://${DOMAIN}/api/user`, { email });

    // Если успешный запрос — сохраняем почту и выводим сообщение
    if (response.data.status === 'ok') {
      localStorage.setItem('email', email); // Сохраняем почту
      alert('Код отправлен на почту. Теперь нажмите "Ввести код".');
    } else {
      authError.textContent = 'Ошибка авторизации';
    }
  } catch (error) {
    authError.textContent = 'Ошибка: Почта занята или неверна';
  }
});

// Переход на страницу подтверждения
enterCodeButton.addEventListener('click', () => {
  window.location.href = 'confirm.html';
});

const sendMessage = document.getElementById('sendMessage');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');

// 👉 Sende-Button klick
sendMessage.addEventListener('click', handleSend);

// 👉 Enter-Taste
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSend();
});

// 🔁 Senden + Bot antworten
function handleSend() {
  const msg = userInput.value.trim();
  if (!msg) return;

  appendMessage(msg, 'user');
  userInput.value = '';

  // 🧠 Simulierter Bot-Antwort
  setTimeout(() => {
    appendMessage('Danke für Ihre Nachricht! 😊', 'bot');
  }, 500);
}

// 💬 Neue Nachricht anzeigen
function appendMessage(text, sender = 'bot') {
  const div = document.createElement('div');
  div.className = `chat-message ${sender}`;
  div.textContent = text;
  chatMessages.appendChild(div);

  // 🔽 Automatisch nach unten scrollen
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


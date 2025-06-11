const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const closeChat = document.getElementById('closeChat');
const sendMessage = document.getElementById('sendMessage');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');

chatToggle.addEventListener('click', () => {
  chatContainer.classList.remove('hidden');
  chatToggle.style.display = 'none';
});

closeChat.addEventListener('click', () => {
  chatContainer.classList.add('hidden');
  chatToggle.style.display = 'flex';
});

sendMessage.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSend();
});

function handleSend() {
  const msg = userInput.value.trim();
  if (!msg) return;

  appendMessage(msg, 'user');
  userInput.value = '';

  // Simulierter Bot-Antwort
  setTimeout(() => {
    appendMessage('Danke für Ihre Nachricht! 😊', 'bot');
  }, 500);
}

function appendMessage(text, sender = 'bot') {
  const div = document.createElement('div');
  div.className = `chat-message ${sender}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


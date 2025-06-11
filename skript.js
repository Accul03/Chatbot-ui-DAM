document.addEventListener('DOMContentLoaded', () => {
  const sendMessage = document.getElementById('sendMessage');
  const userInput = document.getElementById('userInput');
  const chatMessages = document.getElementById('chatMessages');

  // 👉 Klick auf Sendebutton
  sendMessage.addEventListener('click', handleSend);

  // 👉 Enter-Taste
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // 🔁 Nachricht senden + Antwort holen
  function handleSend() {
    const msg = userInput.value.trim();
    if (!msg) return;

    appendMessage(msg, 'user');
    userInput.value = '';

    // 📡 Nachricht an deinen N8n-Webhook senden
    fetch('https://vietze.app.n8n.cloud/webhook/cc2c09e8-6b0a-4d02-8c7e-c2d15d8014c2/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: msg })
    })
    .then(res => res.json())
    .then(data => {
      const reply = data.reply || data.message || '🤖 Keine Antwort erhalten.';
      appendMessage(reply, 'bot');
    })
    .catch(err => {
      console.error('[Chatbot Error]', err);
      appendMessage('⚠️ Verbindungsfehler mit dem Server.', 'bot');
    });
  }

  // 💬 Chatblase hinzufügen
  function appendMessage(text, sender = 'bot') {
    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

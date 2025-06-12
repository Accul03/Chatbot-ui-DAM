const chatToggle = document.getElementById('chatToggle');
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // 👉 Create Chat Toggle Button
    const chatToggle = document.createElement('div');
    chatToggle.className = 'chat-toggle';
    chatToggle.innerHTML = '💬';
    document.body.appendChild(chatToggle);

    // 👉 Create Chat Container with Iframe
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-iframe-container';
    chatContainer.innerHTML = `
      <button class="chat-close" id="closeChat">×</button>
      <iframe src="https://chatbot-ui-dam.vercel.app/embed/index.html"></iframe>
    `;
    document.body.appendChild(chatContainer);

    // 👉 Style einfügen (falls nicht im Hauptprojekt enthalten)
    const style = document.createElement('style');
    style.innerHTML = `
      .chat-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #0098dd;
        border-radius: 50%;
        color: white;
        font-size: 26px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      }

      .chat-iframe-container {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 380px;
        height: 600px;
        display: none;
        z-index: 9999;
      }

      .chat-iframe-container iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 12px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
      }

      .chat-close {
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: 22px;
        font-weight: bold;
        color: #999;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 10;
      }
    `;
    document.head.appendChild(style);

    // 👉 Interaktion
    const closeChat = chatContainer.querySelector('#closeChat');

    chatToggle.addEventListener('click', () => {
      chatContainer.style.display = 'block';
      chatToggle.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
      chatContainer.style.display = 'none';
      chatToggle.style.display = 'flex';
    });
  });
})();

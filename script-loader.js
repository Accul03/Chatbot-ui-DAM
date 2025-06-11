const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const closeChat = document.getElementById('closeChat');

chatToggle.addEventListener('click', () => {
  chatContainer.style.display = 'block';
  chatToggle.style.display = 'none';
});

closeChat.addEventListener('click', () => {
  chatContainer.style.display = 'none';
  chatToggle.style.display = 'flex';
});

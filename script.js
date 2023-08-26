function sendMessage(sender) {
    const messageContainer = document.querySelector(`.${sender}-messages`);
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;

    if (messageText.trim() === '') {
        return; // Don't send empty messages
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.classList.add(sender);
    messageElement.innerHTML = `<span>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</span> ${messageText}`;

    messageContainer.appendChild(messageElement);
    messageInput.value = ''; // Clear the input field
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    var chatBox = document.getElementById("chat-box");
    var messageContainer = document.createElement("div");
    var messageContent = document.createElement("div");
    messageContainer.className = "message outgoing-message";
    messageContent.className = "message-content";
    messageContent.textContent = userInput;
    messageContainer.appendChild(messageContent);
    chatBox.appendChild(messageContainer);
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom of chat box
    setTimeout(() => respondToUser(), 1000); // Simulate bot response after 1 second
  }
}

function respondToUser() {
  var chatBox = document.getElementById("chat-box");
  var messageContainer = document.createElement("div");
  var messageContent = document.createElement("div");
  messageContainer.className = "message incoming-message";
  messageContent.className = "message-content";
  messageContent.textContent = "That's great!";
  messageContainer.appendChild(messageContent);
  chatBox.appendChild(messageContainer);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom of chat box
}

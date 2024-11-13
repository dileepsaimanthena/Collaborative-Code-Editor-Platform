const socket = io();
let roomId = ''; // Assume set dynamically based on URL or user selection
let language = 'javascript'; // Default

// Set up language selection dropdown
document.getElementById('languageSelector').addEventListener('change', (e) => {
  language = e.target.value;
  // Send language change event to all clients
  socket.emit('languageChange', { roomId, language });
});

// Code editor logic
const editor = document.getElementById('editor'); // Use a real editor like Monaco or CodeMirror
editor.addEventListener('input', () => {
  socket.emit('codeUpdate', { roomId, content: editor.value, language });
});

// Socket event handlers
socket.on('codeUpdate', (data) => {
  editor.value = data.content;
});

socket.on('languageChange', (data) => {
  language = data.language;
  document.getElementById('languageSelector').value = language;
});

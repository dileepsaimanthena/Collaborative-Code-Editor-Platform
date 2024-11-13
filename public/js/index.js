document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const createRoomModal = document.getElementById('createRoomModal');
  
    // Open Modals
    document.getElementById('loginButton').onclick = () => loginModal.style.display = 'block';
    document.getElementById('signupButton').onclick = () => signupModal.style.display = 'block';
    document.getElementById('createRoomButton').onclick = () => createRoomModal.style.display = 'block';
  
    // Close Modals
    Array.from(document.getElementsByClassName('close')).forEach(closeButton => {
      closeButton.onclick = () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
        createRoomModal.style.display = 'none';
      };
    });
  
    // Form submission logic (for example purposes only, should connect to backend endpoints)
    document.getElementById('loginForm').onsubmit = async (event) => {
      event.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      // Send login data to the server
    };
  
    document.getElementById('signupForm').onsubmit = async (event) => {
      event.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const password = document.getElementById('signupPassword').value;
      // Send signup data to the server
    };
  
    document.getElementById('createRoomForm').onsubmit = async (event) => {
      event.preventDefault();
      const roomName = document.getElementById('roomName').value;
      const language = document.getElementById('languageSelector').value;
      // Send room creation data to the server
    };
  });
  
function handleFileInput(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function() {
      const faceImage = document.querySelector('.face-image img');
      faceImage.src = reader.result;
    }
  
    reader.readAsDataURL(file);
  }
  
  function handleLogin() {
    const faceImage = document.querySelector('.face-image img');
    const loginBtn = document.querySelector('#login-btn');
  
    if (faceImage.src.includes('user_face.jpg')) {
      alert('Please upload your face image');
    } else {
      alert('Login successful!');
      fileInput.value = '';
      document.querySelector('.face-image img').src = 'image.png';
    }
  }
  
  const fileInput = document.querySelector('#face-input');
  const loginButton = document.querySelector('#login-btn');
  
  fileInput.addEventListener('change', handleFileInput);
  loginButton.addEventListener('click', handleLogin);
  
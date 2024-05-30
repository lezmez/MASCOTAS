const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const loginLink = document.querySelector('.register-link');
const registerLink = document.querySelector('.login-link');
const loginContainer = document.querySelector('.login-container');
const registerContainer = document.querySelector('.register-container');

loginLink.addEventListener('click', () => {
  loginContainer.classList.remove('hidden');
  registerContainer.classList.add('hidden');
});

registerLink.addEventListener('click', () => {
  registerContainer.classList.remove('hidden');
  loginContainer.classList.add('hidden');
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      // Redirigir al usuario a la página de inicio
    } else {
      alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error. Por favor, inténtelo de nuevo más tarde.');
  }
});

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
  const role = document.getElementById('role').value;

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, role })
    });

    if (response.ok) {
      alert('¡Registro exitoso!');
      // Redirigir al usuario a la página de inicio de sesión
    } else {
      alert('Error al registrar usuario. Por favor, inténtelo de nuevo.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error. Por favor, inténtelo de nuevo más tarde.');
  }
});
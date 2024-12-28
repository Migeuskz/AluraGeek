// Seleccionar el botón
const boton = document.querySelector("#mostrarToast");
const loginContainer = document.querySelector('.login_container');
const registerContainer = document.querySelector('.register_container');

const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');


showLoginBtn.addEventListener('click', () => {
    registerContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
});

showRegisterBtn.addEventListener('click', () => {
    loginContainer.classList.add('hidden');
    registerContainer.classList.remove('hidden');
});

console.log('hola mundo')
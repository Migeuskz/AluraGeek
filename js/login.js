import { conexionAPI } from "./conexionAPI.js";

const loginForm = document.querySelector('.login_form');
const emailInput = document.getElementById('login_email');
const passwordInput = document.getElementById('login_password');

//Manejo de evento submit
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    try {
        const usuarios = await conexionAPI.obtenerUsuarios();
        console.log("Usuarios obtenidos:", usuarios); // Depuración

        // Busca un usuario con las credenciales proporcionadas
        const usuario = usuarios.find(
            (user) =>
                user.correoElectronico.toLowerCase() === email.toLowerCase() &&
                user.contrasena === password
        );

        // Validar si el usuario existe
        if (usuario) {
            localStorage.setItem('nombreUsuario', usuario.nombre);

            window.location.href = '../index.html'
        }else{
            alert('Credenciales incorrectas... inténtelo de nuevo!');
        }

        console.log("Usuario encontrado:", usuario); // Depuración
        // window.location.href = './registerProducts.html';
    } catch (error) {
        console.error('Error al validar el login:', error);
        alert('Hubo un problema al intentar iniciar sesión. Por favor, inténtelo de nuevo.');
    }
});

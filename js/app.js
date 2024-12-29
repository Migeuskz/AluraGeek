// Seleccionar elementos para funcionalidad interactiva específica de la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('hola mundo');

    // Manejo de contenedores de login y registro
    const loginContainer = document.querySelector('.login_container');
    const registerContainer = document.querySelector('.register_container');
    const showRegisterBtn = document.getElementById('showRegister');
    const showLoginBtn = document.getElementById('showLogin');

    if (showLoginBtn && showRegisterBtn) {
        showLoginBtn.addEventListener('click', () => {
            registerContainer?.classList.add('hidden');
            loginContainer?.classList.remove('hidden');
        });

        showRegisterBtn.addEventListener('click', () => {
            loginContainer?.classList.add('hidden');
            registerContainer?.classList.remove('hidden');
        });
    }

    // Manejo del header dinámico
    const headerNav = document.querySelector('.header_nav');

    headerNav.innerHTML = ''

    if (headerNav) {
        const nombreUsuario = localStorage.getItem('nombreUsuario');

        if (nombreUsuario) {
            // Cambiar contenido del header para el usuario autenticado
            headerNav.href = './pages/registerProducts.html'; // Redirigir a la página de productos
            headerNav.innerHTML = `
                <div class="header_user">
                    <a href="./pages/registerProducts.html" class="user_link">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </span>
                        Bienvenido, ${nombreUsuario}!
                    </a>
                    <a href="./pages/login.html" class="logout_link">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-logout-2">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                                <path d="M15 12h-12l3 -3" />
                                <path d="M6 15l-3 -3" />
                            </svg>
                        </span>
                    </a>
                </div>
            `;

            // Evento para limpiar localStorage al cerrar sesión
            const logoutLink = document.querySelector('.logout_link');
            logoutLink.addEventListener('click', () => {
                localStorage.removeItem('nombreUsuario'); // Limpiar sesión
            });
        } else {
            // Usuario no autenticado: Redirigir a login
            headerNav.href = './pages/login.html';
            headerNav.innerHTML = `
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                </span>
                Iniciar Sesión
            `;
        }
    }
});

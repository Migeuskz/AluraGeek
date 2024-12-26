// Seleccionar el botón
const boton = document.querySelector("#mostrarToast");

// Escuchar el evento click
boton.addEventListener("click", () => {
  // Mostrar el toast
  Toastify({
    text: "¡Hola! Esto es un mensaje de notificación",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición: 'top' o 'bottom'
    position: "right", // Posición: 'left', 'center' o 'right'
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)", // Estilo del fondo
    },
  }).showToast();
});

// console.log(boton)
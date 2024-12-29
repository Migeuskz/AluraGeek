import { conexionAPI } from "./conexionAPI.js";
const formularioProducto = document.querySelector('[data-formulario-producto]')

async function enviarProducto(evento) {
    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const descuento = document.querySelector('[data-descuento]').value;
    const precio = document.querySelector('[data-precio]').value;
    const urlProducto = document.querySelector('[data-urlProducto]').value;
    const urlImagen = document.querySelector('[data-urlImagen]').value;

    try {
        await conexionAPI.enviarProducto(titulo, descuento, precio, urlProducto, urlImagen);
        alert("Producto creado correctamente");
    } catch (error) {
        alert("Error al crear el producto");
    }
}

formularioProducto.addEventListener('submit', evento => enviarProducto(evento));

import { conexionAPI } from "./conexionAPI.js";

// Función genérica para crear productos
export default function crearProducto(titulo, descuento, precio, urlProducto, urlImagen, tipo) {
    if (tipo === "card") {
        // Crear una card para la lista principal
        const producto = document.createElement('div');
        producto.className = "product";
        producto.innerHTML = `
            <img src="${urlImagen}" alt="Producto ${titulo}">
            <div>
                <h3>${titulo}</h3>
                <p><span>${descuento ? `-${descuento}%` : ""}</span> ${precio}</p>
            </div>
            <a href="${urlProducto}" class="btn" target="_blank">Ir a comprar</a>
        `;
        return producto;
    } else if (tipo === "table") {
        // Crear una fila para la tabla
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src="${urlImagen}" alt="${titulo}" style="width: 100px; height: auto;">
            </td>
            <td>${titulo}</td>
            <td>${descuento || "N/A"}</td>
            <td>${precio}</td>
            <td>
                <a href="${urlProducto}" target="_blank">Ir a comprar</a>
            </td>
            <td>
                <div class="options">
                    <button class="edit">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                    </button>
                    <button class="delete">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-trash-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>
                    </button>
                </div>
            </td>
        `;
        return fila;
    }
}

// Función para mostrar productos como cards
async function mostrarProductosCards() {
    const lista = document.querySelector('[data-lista]');
    try {
        const productos = await conexionAPI.listarProductos();
        productos.forEach((producto) => {
            const card = crearProducto(
                producto.titulo,
                producto.descuento,
                producto.precio,
                producto.urlProducto,
                producto.urlImagen,
                "card"
            );
            lista.appendChild(card);
        });
    } catch (error) {
        console.error("Error al cargar productos:", error);
        lista.innerHTML = "<p>Error al cargar los productos</p>";
    }
}

// Función para mostrar productos en la tabla
async function mostrarProductosTabla() {
    const tableBody = document.querySelector("[data-lista-tabla]");
    try {
        const productos = await conexionAPI.listarProductos();
        productos.forEach((producto) => {
            const fila = crearProducto(
                producto.titulo,
                producto.descuento,
                producto.precio,
                producto.urlProducto,
                producto.urlImagen,
                "table"
            );
            tableBody.appendChild(fila);
        });
    } catch (error) {
        console.error("Error al cargar productos en la tabla:", error);
        tableBody.innerHTML = "<tr><td colspan='6'>Error al cargar los productos</td></tr>";
    }
}

// Llamadas a las funciones
mostrarProductosCards();
mostrarProductosTabla();

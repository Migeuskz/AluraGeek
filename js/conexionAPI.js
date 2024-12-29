async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/products')
    const conexionJson = await conexion.json()

    return conexionJson;
    
}

async function obtenerUsuarios() {
    const conexion = await fetch('http://localhost:3001/users');
    const usuarios = await conexion.json();
    return usuarios;
}

async function enviarProducto(titulo, descuento, precio, urlProducto, urlImagen) {
    const conexion = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descuento: descuento,
            precio: precio,
            urlProducto: urlProducto,
            urlImagen: urlImagen
        })
    })
    const producto = await conexion.json();

    if (conexion.status !== 201) {
        throw new Error(producto.message);
    }

    return producto;
}

export const conexionAPI = {
    listarProductos,
    obtenerUsuarios,
    enviarProducto,
}
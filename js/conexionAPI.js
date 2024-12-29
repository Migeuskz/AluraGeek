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


export const conexionAPI = {
    listarProductos,
    obtenerUsuarios,
}
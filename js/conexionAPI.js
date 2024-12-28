async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/products')
    const conexionJson = await conexion.json()

    return conexionJson;
    
}


export const conexionAPI = {
    listarProductos,
}
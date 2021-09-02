const productModel = require('../models/productos');



//listar productos por postman
async function listarProductosApi(req, res) {
    const result_productos = await productModel().listProduct();
    res.status(200).json(result_productos)
}
//guardar productos por postman
/*
            async function cargarProductosApi(req, res) {
    const data = req.body;
    await productModel().cargarProducto(data);
    res.status(200).json({
        success: 1,
        message: "Producto agregado con exito"
    })
}
*/

//modifica porduto postman
/*
        async function modProductosApi(req, res) {
        const datos_for = [
            req.body.nombre,
            req.body.descripcion,
            req.body.precio,
            req.params.id
        ]
        await productModel().modiProducto(datos_for);
        res.status(200).json({ success: 1, message: "producto actualizado con exito" })
    }

*/
//eliminar prductos con postman
/*
    async function borrarProductosApi(req, res) {
    const data = req.params.id;
    await productModel().eliminarProducto(data);
    res.status(200).json({ success: 1, message: "producto eliminado con exito" })
}
*/



module.exports = {
    listarProductosApi
}
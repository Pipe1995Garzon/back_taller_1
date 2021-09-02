const pedidosModel = require('../models/pedidos');

//listar todos los pedidos
async function listarPedidosApi(req, res) {
    const result_productos = await pedidosModel().listPedidos();
    res.status(200).json(result_productos)
}

module.exports = {
    listarPedidosApi
}
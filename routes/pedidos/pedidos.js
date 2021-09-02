const express = require('express');
const router = express.Router();
const pedidosController = require('../../controllers/pedidosController');

//RUTAS PARA EL POSTMAN
router.get('/api/listarpedidos', pedidosController.listarPedidosApi);

module.exports = router;
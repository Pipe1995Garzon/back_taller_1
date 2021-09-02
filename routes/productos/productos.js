const express = require('express');
const router = express.Router();
const productosController = require('../../controllers/productosController');


//RUTAS PARA EL POSTMAN
router.get('/api/listarproductos', productosController.listarProductosApi)
    //router.post('/api/agregarproductos', productosController.cargarProductosApi)
    //router.delete('/api/eliminarproductos/:id', productosController.borrarProductosApi)
    //router.put('/api/modificarproductos/:id', productosController.modProductosApi)
module.exports = router;
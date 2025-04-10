const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido } = require('../controllers/pedido.controller');

router.get('/', obtenerPedidos);
router.post('/', crearPedido);

module.exports = router;

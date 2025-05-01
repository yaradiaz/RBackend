const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido } = require('../controllers/pedido.controller');

/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Verifica conexión con la base de datos y lista pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Conexión establecida y datos devueltos desde la tabla pedido
 */


router.get('/', obtenerPedidos);
router.post('/', crearPedido);

module.exports = router;

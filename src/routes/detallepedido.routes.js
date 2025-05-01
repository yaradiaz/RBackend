const express = require('express');
const router = express.Router();
const { obtenerDetalles, crearDetalle } = require('../controllers/detallepedido.controller');

/**
 * @swagger
 * /api/detalles:
 *   get:
 *     summary: Verifica conexión con la base de datos y lista detalles de pedido
 *     tags: [Detalles de Pedido]
 *     responses:
 *       200:
 *         description: Conexión establecida y datos devueltos desde la tabla detalle_pedido
 */


router.get('/', obtenerDetalles);
router.post('/', crearDetalle);

module.exports = router;

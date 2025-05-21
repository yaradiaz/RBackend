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

/**
 * @swagger
 * /api/pedidos:
 *   post:
 *     summary: Crea un nuevo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total:
 *                 type: number
 *                 example: 15000
 *               cliente_id_cliente:
 *                 type: integer
 *                 example: 1
 *             required:
 *               - total
 *               - cliente_id_cliente
 *     responses:
 *       201:
 *         description: Pedido creado correctamente
 *       500:
 *         description: Error al crear pedido
 */


router.get('/', obtenerPedidos);
router.post('/', crearPedido);

module.exports = router;

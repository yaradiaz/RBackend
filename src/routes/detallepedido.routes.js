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

/**
 * @swagger
 * /api/detalles:
 *   post:
 *     summary: Crea un nuevo detalle de pedido
 *     tags: [Detalles de Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: integer
 *                 example: 2
 *               subtotal:
 *                 type: number
 *                 format: float
 *                 example: 24000.00
 *               pedido_id_pedido:
 *                 type: integer
 *                 example: 1
 *               menu_id_menu:
 *                 type: integer
 *                 example: 3
 *             required:
 *               - cantidad
 *               - subtotal
 *               - pedido_id_pedido
 *               - menu_id_menu
 *     responses:
 *       201:
 *         description: Detalle de pedido creado correctamente
 *       500:
 *         description: Error al crear detalle de pedido
 */


router.get('/', obtenerDetalles);
router.post('/', crearDetalle);

module.exports = router;

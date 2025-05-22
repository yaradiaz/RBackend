const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido } = require('../controllers/pedido.controller');
const verificarToken = require('../middleware/authMiddleware'); // 👈 Importa el middleware

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

/**
 * @swagger
 * /api/pedidos:
 *   post:
 *     summary: Crea un nuevo pedido (requiere token JWT)
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total:
 *                 type: number
 *                 example: 10000
 *               cliente_id_cliente:
 *                 type: integer
 *                 example: 1
 *             required:
 *               - total
 *               - cliente_id_cliente
 *     responses:
 *       201:
 *         description: Pedido creado
 *       403:
 *         description: Token no proporcionado
 *       401:
 *         description: Token inválido
 */
router.post('/', verificarToken, crearPedido); // 👈 Protegida

module.exports = router;

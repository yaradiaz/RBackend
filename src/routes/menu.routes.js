const express = require('express');
const router = express.Router();
const { obtenerMenu, crearMenu } = require('../controllers/menu.controller');

/**
 * @swagger
 * /api/menu:
 *   get:
 *     summary: Verifica conexión con la base de datos y lista menú
 *     tags: [Menú]
 *     responses:
 *       200:
 *         description: Conexión establecida y datos devueltos desde la tabla menú
 */

/**
 * @swagger
 * /api/menu:
 *   post:
 *     summary: Crea un nuevo producto en el menú
 *     tags: [Menú]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Ensalada César
 *               descripcion:
 *                 type: string
 *                 example: Ensalada con pollo, lechuga y aderezo
 *               categoria:
 *                 type: string
 *                 example: Entrada
 *               precio:
 *                 type: number
 *                 example: 12000
 *             required:
 *               - nombre
 *               - descripcion
 *               - categoria
 *               - precio
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 *       500:
 *         description: Error al crear producto
 */

router.get('/', obtenerMenu);
router.post('/', crearMenu);

module.exports = router;

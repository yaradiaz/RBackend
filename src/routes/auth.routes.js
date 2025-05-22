const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controller');

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Inicia sesión con correo y contraseña
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo:
 *                 type: string
 *                 example: usuario@correo.com
 *               contrasena:
 *                 type: string
 *                 example: password123
 *             required:
 *               - correo
 *               - contrasena
 *     responses:
 *       200:
 *         description: Token generado exitosamente
 *       401:
 *         description: Credenciales incorrectas
 *       500:
 *         description: Error en el servidor
 */
router.post('/', login);

module.exports = router;

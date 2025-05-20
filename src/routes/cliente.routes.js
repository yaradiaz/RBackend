const express = require('express');
const router = express.Router();
const { obtenerClientes, crearCliente } = require('../controllers/cliente.controller');

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Verifica conexión con la base de datos y lista clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Conexión establecida y datos devueltos desde la tabla cliente
 */

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan Perez
 *               correo:
 *                 type: string
 *                 example: juan.perez@example.com
 *               contrasena:
 *                 type: string
 *                 example: "password123"
 *             required:
 *               - nombre
 *               - correo
 *               - contrasena
 *     responses:
 *       201:
 *         description: Cliente creado correctamente
 *       400:
 *         description: Datos inválidos o faltantes
 *       500:
 *         description: Error al crear cliente
 */


router.get('/', obtenerClientes);
router.post('/', crearCliente);

module.exports = router;


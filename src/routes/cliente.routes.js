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



router.get('/', obtenerClientes);
router.post('/', crearCliente);

module.exports = router;



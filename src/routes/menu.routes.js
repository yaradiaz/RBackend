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


router.get('/', obtenerMenu);
router.post('/', crearMenu);

module.exports = router;

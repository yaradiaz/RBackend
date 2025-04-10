const express = require('express');
const router = express.Router();
const { obtenerMenu, crearMenu } = require('../controllers/menu.controller');

router.get('/', obtenerMenu);
router.post('/', crearMenu);

module.exports = router;

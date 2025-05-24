const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controller');

router.post('/', 
  // #swagger.tags = ['Autenticación']
  // #swagger.summary = 'Inicia sesión con correo y contraseña'
  // #swagger.requestBody = {
  //   required: true,
  //   content: {
  //     "application/json": {
  //       schema: {
  //         correo: "usuario@correo.com",
  //         contrasena: "password123"
  //       }
  //     }
  //   }
  // }
  // #swagger.responses[200] = { description: "Token generado exitosamente" }
  // #swagger.responses[401] = { description: "Credenciales incorrectas" }
  // #swagger.responses[500] = { description: "Error en el servidor" }
  login
);

module.exports = router;

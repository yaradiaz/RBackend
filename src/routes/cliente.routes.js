const express = require('express');
const router = express.Router();
const { obtenerClientes, crearCliente } = require('../controllers/cliente.controller');

router.get('/', 
  // #swagger.tags = ['Clientes']
  // #swagger.summary = 'Obtener todos los clientes'
  // #swagger.responses[200] = { description: 'Lista de clientes' }
  obtenerClientes
);

router.post('/', 
  // #swagger.tags = ['Clientes']
  // #swagger.summary = 'Crea un nuevo cliente'
  // #swagger.requestBody = {
  //   required: true,
  //   content: {
  //     "application/json": {
  //       schema: {
  //         nombre: "Juan Perez",
  //         correo: "juan.perez@example.com",
  //         contrasena: "password123"
  //       }
  //     }
  //   }
  // }
  // #swagger.responses[201] = { description: 'Cliente creado correctamente' }
  // #swagger.responses[400] = { description: 'Datos inválidos o faltantes' }
  // #swagger.responses[500] = { description: 'Error al crear cliente' }
  crearCliente
);

module.exports = router;


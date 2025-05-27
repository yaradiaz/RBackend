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
  //         type: "object",
  //         properties: {
  //           nombre: { type: "string", example: "Juan Perez" },
  //           correo: { type: "string", example: "juan.perez@example.com" },
  //           contrasena: { type: "string", example: "password123" }
  //         }, 
  //         required: ["nombre", "correo", "contrasena"]
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


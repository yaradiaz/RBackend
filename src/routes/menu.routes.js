const express = require('express');
const router = express.Router();
const { obtenerMenu, crearMenu } = require('../controllers/menu.controller');

router.get('/', 
  // #swagger.tags = ['Menú']
  // #swagger.summary = 'Verifica conexión con la base de datos y lista menú'
  // #swagger.responses[200] = { description: 'Conexión establecida y datos devueltos desde la tabla menú' }
  obtenerMenu
);

router.post('/', 
  // #swagger.tags = ['Menú']
  // #swagger.summary = 'Crea un nuevo producto en el menú'
  // #swagger.requestBody = {
  //   required: true,
  //   content: {
  //     "application/json": {
  //       schema: {
  //         nombre: "Ensalada César",
  //         descripcion: "Ensalada con pollo, lechuga y aderezo",
  //         categoria: "Entrada",
  //         precio: 12000
  //       }
  //     }
  //   }
  // }
  // #swagger.responses[201] = { description: 'Producto creado correctamente' }
  // #swagger.responses[500] = { description: 'Error al crear producto' }
  crearMenu
);

module.exports = router;

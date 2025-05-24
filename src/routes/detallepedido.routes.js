const express = require('express');
const router = express.Router();
const { obtenerDetalles, crearDetalle } = require('../controllers/detallepedido.controller');

router.get('/', 
  // #swagger.tags = ['Detalles de Pedido']
  // #swagger.summary = 'Verifica conexión con la base de datos y lista detalles de pedido'
  // #swagger.responses[200] = { description: 'Conexión establecida y datos devueltos desde la tabla detalle_pedido' }
  obtenerDetalles
);

router.post('/', 
  // #swagger.tags = ['Detalles de Pedido']
  // #swagger.summary = 'Crea un nuevo detalle de pedido'
  // #swagger.requestBody = {
  //   required: true,
  //   content: {
  //     "application/json": {
  //       schema: {
  //         cantidad: 2,
  //         subtotal: 24000.00,
  //         pedido_id_pedido: 1,
  //         menu_id_menu: 3
  //       }
  //     }
  //   }
  // }
  // #swagger.responses[201] = { description: 'Detalle de pedido creado correctamente' }
  // #swagger.responses[500] = { description: 'Error al crear detalle de pedido' }
  crearDetalle
);


module.exports = router;

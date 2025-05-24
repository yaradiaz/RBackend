const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido } = require('../controllers/pedido.controller');
const verificarToken = require('../middleware/authMiddleware'); // 👈 Importa el middleware

router.get('/',
  // #swagger.tags = ['Pedidos']
  // #swagger.summary = 'Verifica conexión con la base de datos y lista pedidos'
  // #swagger.responses[200] = { description: 'Conexión establecida y datos devueltos desde la tabla pedido' }
  obtenerPedidos
);

router.post('/',
  verificarToken,
  // #swagger.tags = ['Pedidos']
  // #swagger.summary = 'Crea un nuevo pedido (requiere token JWT)'
  // #swagger.security = [{ "bearerAuth": [] }]
  // #swagger.requestBody = {
  //   required: true,
  //   content: {
  //     "application/json": {
  //       schema: {
  //         total: 10000,
  //         cliente_id_cliente: 1
  //       }
  //     }
  //   }
  // }
  // #swagger.responses[201] = { description: 'Pedido creado' }
  // #swagger.responses[403] = { description: 'Token no proporcionado' }
  // #swagger.responses[401] = { description: 'Token inválido' }
  crearPedido
);

module.exports = router;

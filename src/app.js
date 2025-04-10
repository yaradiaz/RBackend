const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/clientes', require('./routes/cliente.routes'));
app.use('/api/menu', require('./routes/menu.routes'));
app.use('/api/pedidos', require('./routes/pedido.routes'));
app.use('/api/detalles', require('./routes/detallepedido.routes'));

module.exports = app;

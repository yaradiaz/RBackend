const Pedido = require('../models/pedido.model');

const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener pedidos' });
  }
};

const crearPedido = async (req, res) => {
  try {
    const { total, cliente_id_cliente } = req.body;
    const nuevo = await Pedido.create({ total, cliente_id_cliente });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear pedido' });
  }
};

module.exports = { obtenerPedidos, crearPedido };

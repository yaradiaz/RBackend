const DetallePedido = require('../models/detallePedido.model');

const obtenerDetalles = async (req, res) => {
  try {
    const detalles = await DetallePedido.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener detalles de pedido' });
  }
};

const crearDetalle = async (req, res) => {
  try {
    const { cantidad, subtotal, menu_id_menu, pedido_id_pedido } = req.body;
    const nuevo = await DetallePedido.create({ cantidad, subtotal, menu_id_menu, pedido_id_pedido });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear detalle' });
  }
};

module.exports = { obtenerDetalles, crearDetalle };

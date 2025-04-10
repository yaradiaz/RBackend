const Cliente = require('../models/cliente.model');

const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clientes' });
  }
};

const crearCliente = async (req, res) => {
  try {
    const { nombre, correo, telefono } = req.body;
    const nuevoCliente = await Cliente.create({ nombre, correo, telefono });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear cliente' });
  }
};

module.exports = { obtenerClientes, crearCliente };

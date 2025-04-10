const Cliente = require('../models/cliente.model');

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los clientes' });
  }
};

// Obtener un cliente por ID
const obtenerCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el cliente' });
  }
};

// Crear un nuevo cliente
const crearCliente = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;
    const nuevoCliente = await Cliente.create({ nombre, correo, password });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el cliente' });
  }
};

module.exports = {
  obtenerClientes,
  obtenerCliente,
  crearCliente
};

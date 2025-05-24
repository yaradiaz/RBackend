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
    const { nombre, correo, contrasena } = req.body;
    const nuevoCliente = await Cliente.create({ nombre, correo, contrasena });
    res.status(201).json(nuevoCliente);
  } catch (error) {
     console.error(error); // 👈 Agregado
    res.status(500).json({ mensaje: 'Error al crear cliente' });
  }
};

module.exports = { obtenerClientes, crearCliente };

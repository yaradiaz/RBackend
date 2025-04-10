const Menu = require('../models/menu.model');

const obtenerMenu = async (req, res) => {
  try {
    const menu = await Menu.findAll();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener menú' });
  }
};

const crearMenu = async (req, res) => {
  try {
    const { nombre, descripcion, categoria, precio } = req.body;
    const nuevo = await Menu.create({ nombre, descripcion, categoria, precio });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
};

module.exports = { obtenerMenu, crearMenu };

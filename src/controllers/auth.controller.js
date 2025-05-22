const Cliente = require('../models/cliente.model');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    // Buscar cliente por correo
    const cliente = await Cliente.findOne({ where: { correo } });

    // Validar si existe y la contraseña coincide
    if (!cliente || cliente.contrasena !== contrasena) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    // Crear token JWT
    const token = jwt.sign(
      { id: cliente.id_cliente, nombre: cliente.nombre },
      'contrasena_segura', 
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};

module.exports = { login };

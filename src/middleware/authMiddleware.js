const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ mensaje: 'Token no proporcionado' });
  }

   const token = authHeader.split(' ')[1]; // 👈 Extrae solo el token

  if (!token) {
    return res.status(403).json({ mensaje: 'Token no válido' });
  }   

  try {
    const decoded = jwt.verify(token, 'contrasena_segura'); // Debe coincidir con la del login
    req.user = decoded;
    next(); // El token es válido, se continúa a la ruta protegida
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
};

module.exports = verificarToken;

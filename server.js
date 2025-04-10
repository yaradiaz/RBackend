const express = require('express');
const db = require('./src/config/db');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
app.use('/api/clientes', require('./src/routes/cliente.routes'));

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log('✅ Conexión a la base de datos exitosa'))
  .catch(err => console.error('❌ Error al conectar a la base de datos', err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

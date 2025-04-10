const db = require('./src/config/db');
const app = require('./src/app');

const PORT = 3000;

db.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos exitosa');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('❌ Error al conectar a la base de datos:', err));

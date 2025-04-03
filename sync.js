const db = require('./src/config/db');

// Importar modelos
require('./src/models/cliente.model');
require('./src/models/menu.model');
require('./src/models/pedido.model');
require('./src/models/detallepedido.model');


const syncDB = async () => {
    try {
        await db.authenticate(); // Verificar conexión
        console.log('✅ Conexión a la BD exitosa');

        await db.sync({ force: true }); // ⚠ Esto borrará y recreará las tablas
        console.log('✅ Base de datos sincronizada correctamente');
        
        process.exit();
    } catch (error) {
        console.error('❌ Error al sincronizar la BD:', error);
        process.exit(1);
    }
};

syncDB();

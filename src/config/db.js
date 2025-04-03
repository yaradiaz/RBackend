const { Sequelize } = require("sequelize");

// Configuración de conexión a la base de datos
const sequelize = new Sequelize("mydb", "root", "r00t123", {
  host: "localhost",       // O la IP del servidor MySQL
  dialect: "mysql",        // Especificamos que usamos MySQL
  logging: false,          // Desactiva logs de SQL en consola
});

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log("✅ Conexión a la base de datos exitosa"))
  .catch(err => console.error("❌ Error al conectar la base de datos:", err));

module.exports = sequelize;

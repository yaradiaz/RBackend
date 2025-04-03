const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Cliente = require('./cliente.model');

const Pedido = db.define('Pedido', {
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: DataTypes.INTEGER, // ✅ Eliminado el (50)
        allowNull: false
    }
}, {
    tableName: 'pedido',
    timestamps: false
});

// Relación 1 Cliente → * Pedidos
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id_cliente' }); // Mantiene el nombre de la BD
Cliente.hasMany(Pedido, { foreignKey: 'cliente_id_cliente' });

module.exports = Pedido;

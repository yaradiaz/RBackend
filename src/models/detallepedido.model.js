const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Menu = require('./menu.model');
const Pedido = require('./pedido.model');

const DetallePedido = db.define('DetallePedido', {
    id_detalle_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
}, {
    tableName: 'detalle_pedido',
    timestamps: false
});

// Relación * Menús -> * DetallePedido
DetallePedido.belongsTo(Menu, { foreignKey: 'menu_id_menu' });
Menu.hasMany(DetallePedido, { foreignKey: 'menu_id_menu' });

// Relación * Pedidos -> * DetallePedido
DetallePedido.belongsTo(Pedido, { foreignKey: 'pedido_id_pedido' });
Pedido.hasMany(DetallePedido, { foreignKey: 'pedido_id_pedido' });

module.exports = DetallePedido;

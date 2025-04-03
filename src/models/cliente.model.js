const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Cliente = db.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    tableName: 'cliente',
    timestamps: false
});

module.exports = Cliente;

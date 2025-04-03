const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Menu = db.define('Menu', {
    id_menu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(255), // Aumenté la longitud para permitir descripciones más largas
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10,2), // Ahora permite decimales
        allowNull: false,
        validate: {
            min: 0 // Evita precios negativos
        }
    }
}, {
    tableName: 'menu',
    timestamps: false
});

module.exports = Menu;

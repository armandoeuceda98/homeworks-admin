const { DataTypes } = require('sequelize');
const dbConnection = require('../database/config');

const Categoria = dbConnection.define('categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    }
});

module.exports = Categoria;

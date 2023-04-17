const { DataTypes } = require('sequelize');
const dbConnection = require('../database/config');

const Etiqueta = dbConnection.define('etiqueta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Etiqueta;

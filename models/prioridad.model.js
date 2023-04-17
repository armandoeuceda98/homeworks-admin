const { DataTypes } = require('sequelize');
const dbConnection = require('../database/config');

const Prioridad = dbConnection.define('prioridad', {
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

module.exports = Prioridad;

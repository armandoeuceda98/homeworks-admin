const { DataTypes } = require('sequelize');
const dbConnection = require('../database/config');

const Tarea = dbConnection.define('tarea', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'en_progreso', 'completada'),
        allowNull: false,
        defaultValue: 'pendiente'
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idPrioridad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Tarea;

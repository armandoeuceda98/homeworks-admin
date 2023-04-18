const { DataTypes } = require('sequelize');
const dbConnection = require('../database/config');

const TareaEtiqueta = dbConnection.define('tarea_etiqueta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTarea: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idEtiqueta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = TareaEtiqueta;

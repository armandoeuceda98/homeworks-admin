const usuario = require('./usuario.model');
const tarea = require('./tarea.model');
const categoria = require('./categoria.model');
const etiqueta = require('./etiqueta.model');
const tareaEtiqueta = require('./tarea_etiqueta.model');
const comentario = require('./comentario.model');
const prioridad = require('./prioridad.model');


tarea.belongsTo(usuario, {
    foreignKey: 'idUsuario'
});

tarea.belongsTo(categoria, {
    foreignKey: 'idCategoria'
});

tarea.belongsTo(prioridad, {
    foreignKey: 'idPrioridad'
});

tarea.belongsToMany(etiqueta, { 
    through: tareaEtiqueta,
    foreignKey: "idTarea",
    otherKey: "idEtiqueta"
 });
etiqueta.belongsToMany(tarea, {
    through: tareaEtiqueta,
    foreignKey: "idTarea",
    otherKey: "idEtiqueta"
});

comentario.belongsTo(tarea);
comentario.belongsTo(usuario);


const db = {
    usuario,
    tarea,
    categoria,
    etiqueta,
    tareaEtiqueta,
    comentario,
    prioridad,

};


module.exports = db;
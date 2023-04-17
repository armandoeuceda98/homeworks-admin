const { request, response } = require('express');

const db = require('../models/index');
const Tarea = db.tarea;

// Obtener todas las tareas de un usuario por su ID
const obtenerTodasLasTareasDeUsuario = async (req = request, res = response) => {
    const { idUsuario } = req.params;
    try {

        const tareas = await Tarea.findAll({
            where: {
                idUsuario
            }
        });

        res.status(200).json(tareas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener las tareas del usuario' });
    }
};

// Obtener una tarea por su ID
const obtenerTareaPorId = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            res.status(200).json(tarea);
        } else {
            res.status(404).json({ mensaje: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener la tarea' });
    }
};

// Crear una nueva tarea
const crearTarea = async (req = request, res = response) => {
    const { titulo, descripcion, estado, idCategoria, idPrioridad, idUsuario } = req.body;
    try {
        const nuevaTarea = await Tarea.create({
            titulo,
            descripcion,
            estado,
            idCategoria,
            idPrioridad,
            idUsuario
        });
        res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear la tarea' });
    }
};

// Actualizar una tarea por su ID
const actualizarTarea = async (req = request, res = response) => {
    const { id } = req.params;
    const { titulo, descripcion, estado, idCategoria, idPrioridad } = req.body;
    try {
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            tarea.titulo = titulo;
            tarea.descripcion = descripcion;
            tarea.estado = estado;
            tarea.idCategoria = idCategoria;
            tarea.idPrioridad = idPrioridad;
            await tarea.save();
            res.status(200).json(tarea);
        } else {
            res.status(404).json({ mensaje: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar la tarea' });
    }
};

// Eliminar una tarea por su ID
const eliminarTarea = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            await tarea.destroy();
            res.status(200).json({ mensaje: 'Tarea eliminada exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar la tarea' });
    }
};

module.exports = {
    obtenerTodasLasTareasDeUsuario,
    obtenerTareaPorId,
    crearTarea,
    actualizarTarea,
    eliminarTarea
};

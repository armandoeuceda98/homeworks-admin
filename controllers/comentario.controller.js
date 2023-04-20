const { request, response } = require('express');

const db = require('../models/index');
const Comentario = db.comentario;

// Obtener todos los comentarios de una tarea por su ID
const obtenerTodosLosComentariosDeTarea = async (req = request, res = response) => {
    const { idTarea } = req.query;
    try {

        const comentarios = await Comentario.findAll({
            where: {
                idTarea: idTarea
            }
        });

        res.status(200).json(comentarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los comentarios de la tarea' });
    }
};

// Obtener un comentario por su ID
const obtenerComentarioPorId = async (req = request, res = response) => {
    const { id } = req.body;
    try {
        const comentario = await Comentario.findByPk(id);
        if (comentario) {
            res.status(200).json(comentario);
        } else {
            res.status(404).json({ mensaje: 'Comentario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener el comentario' });
    }
};

// Crear un nuevo comentario
const crearComentario = async (req = request, res = response) => {
    const { contenido, idTarea } = req.body;
    const idUsuario = req.uid;
    try {
        const nuevaFecha = new Date();
        const nuevoComentario = await Comentario.create({
            contenido: contenido,
            fecha: nuevaFecha,
            idUsuario: idUsuario,
            idTarea: idTarea
        });
        res.status(201).json(nuevoComentario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el comentario' });
    }
};


// Actualizar un comentario por su ID
const actualizarComentario = async (req = request, res = response) => {
    const { id, contenido } = req.body;
    try {
        const comentario = await Comentario.findByPk(id);
        if (comentario) {
            comentario.contenido = contenido;
            await comentario.save();
            res.status(200).json(comentario);
        } else {
            res.status(404).json({ mensaje: 'Comentario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar el comentario' });
    }
};

// Eliminar un comentario por su ID
const eliminarComentario = async (req = request, res = response) => {
    const { id } = req.query;
    try {
        const comentario = await Comentario.findByPk(id);
        if (comentario) {
            await comentario.destroy();
            res.status(200).json({ mensaje: 'Comentario eliminado exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Comentario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar el comentario' });
    }
};

module.exports = {
    obtenerTodosLosComentariosDeTarea,
    obtenerComentarioPorId,
    crearComentario,
    actualizarComentario,
    eliminarComentario
};

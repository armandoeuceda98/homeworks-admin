const { request, response } = require('express');

const db = require('../models/index');
const Prioridad = db.prioridad;

// Obtener todas las prioridades
const obtenerTodasLasPrioridades = async (req = request, res = response) => {
    try {
        const prioridades = await Prioridad.findAll();
        res.json(prioridades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener las prioridades' });
    }
};

// Obtener una prioridad por su ID
const obtenerPrioridadPorId = async (req = request, res = response) => {
    try {
        const prioridad = await Prioridad.findByPk(req.body.idPrioridad);
        if (prioridad) {
            res.json(prioridad);
        } else {
            res.status(404).json({ mensaje: 'Prioridad no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener la prioridad' });
    }
};

// Crear una nueva prioridad
const crearPrioridad = async (req = request, res = response) => {
    try {
        const nuevaPrioridad = await Prioridad.create(req.body);
        res.json(nuevaPrioridad);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear la prioridad' });
    }
};

// Actualizar una prioridad por su ID
const actualizarPrioridad = async (req = request, res = response) => {
    try {
        const { idPrioridad, nombre, descripcion } = req.body;

        const prioridad= await Prioridad.findByPk(idPrioridad);
        if (prioridad) {
            await prioridad.update({
                nombre: nombre,
                descripcion: descripcion
            });
            res.json(prioridad);
        } else {
            res.status(404).json({ mensaje: 'Prioridad no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al actualizar la prioridad' });
    }
};

// Eliminar una prioridad por su ID
const eliminarPrioridad = async (req = request, res = response) => {
    try {
        const { idPrioridad } = req.body;

        const prioridad = await Prioridad.findByPk(idPrioridad);
        if (prioridad) {
            await prioridad.destroy();
            res.json({ mensaje: 'Prioridad eliminada exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Prioridad no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al eliminar la prioridad' });
    }
};

module.exports = {
    obtenerTodasLasPrioridades,
    obtenerPrioridadPorId,
    crearPrioridad,
    actualizarPrioridad,
    eliminarPrioridad
};

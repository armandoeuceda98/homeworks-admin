const { request, response } = require('express');

const db = require('../models/index');
const Etiqueta = db.etiqueta;

// Obtener todas las etiquetas
const obtenerTodasLasEtiquetas = async (req = request, res = response) => {
    try {
        const etiquetas = await Etiqueta.findAll();
        res.json(etiquetas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener las etiquetas' });
    }
};

// Obtener una etiqueta por su ID
const obtenerEtiquetaPorId = async (req = request, res = response) => {
    try {
        const { idEtiqueta } = req.body;

        const etiqueta = await Etiqueta.findByPk(idEtiqueta);
        if (etiqueta) {
            res.json(etiqueta);
        } else {
            res.status(404).json({ mensaje: 'Etiqueta no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener la etiqueta' });
    }
};

// Crear una nueva etiqueta
const crearEtiqueta = async (req = request, res = response) => {
    try {
        const nuevaEtiqueta = await Etiqueta.create(req.body);
        res.json(nuevaEtiqueta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear la etiqueta' });
    }
};

// Actualizar una etiqueta por su ID
const actualizarEtiqueta = async (req = request, res = response) => {
    try {
        const { idEtiqueta, nombre} = req.body;

        const etiqueta = await Etiqueta.findByPk(idEtiqueta);
        if (etiqueta) {
            etiqueta.nombre = nombre;
            await etiqueta.save();
            res.status(200).json(etiqueta);
        } else {
            res.status(404).json({ mensaje: 'Etiqueta no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al actualizar la etiqueta' });
    }
};

// Eliminar una etiqueta por su ID
const eliminarEtiqueta = async (req = request, res = response) => {
    try {
        const { idEtiqueta } = req.body;

        const etiqueta = await Etiqueta.findByPk(idEtiqueta);
        if (etiqueta) {
            await etiqueta.destroy();
            res.json({ mensaje: 'Etiqueta eliminada exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Etiqueta no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al eliminar la etiqueta' });
    }
};

module.exports = {
    obtenerTodasLasEtiquetas,
    obtenerEtiquetaPorId,
    crearEtiqueta,
    actualizarEtiqueta,
    eliminarEtiqueta
};

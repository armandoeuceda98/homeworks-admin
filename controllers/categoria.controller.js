const { request, response } = require('express');

const db = require('../models/index');
const Categoria = db.categoria;

// Obtener todas las categorías
const obtenerTodasLasCategorias = async (req = request, res = response) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener las categorías' });
    }
};

// Obtener una categoría por su ID
const obtenerCategoriaPorId = async (req = request, res = response) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ mensaje: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al obtener la categoría' });
    }
};

// Crear una nueva categoría
const crearCategoria = async (req = request, res = response) => {
    try {
        const nuevaCategoria = await Categoria.create(req.body);
        res.json(nuevaCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al crear la categoría' });
    }
};

// Actualizar una categoría por su ID
const actualizarCategoria = async (req = request, res = response) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            await categoria.update(req.body);
            res.json(categoria);
        } else {
            res.status(404).json({ mensaje: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al actualizar la categoría' });
    }
};

// Eliminar una categoría por su ID
const eliminarCategoria = async (req = request, res = response) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            await categoria.destroy();
            res.json({ mensaje: 'Categoría eliminada exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ocurrió un error al eliminar la categoría' });
    }
};

module.exports = {
    obtenerTodasLasCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
};

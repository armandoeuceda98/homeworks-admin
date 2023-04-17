'Ruta: /api/categoria';

const { Router } = require('express');
const { obtenerTodasLasCategorias, obtenerCategoriaPorId, crearCategoria, actualizarCategoria, eliminarCategoria } = require('../controllers/categoria.controller');

const router = Router();

router.get('/categorias', obtenerTodasLasCategorias); // Ruta para obtener todas las categorías
router.get('/categorias/:id', obtenerCategoriaPorId); // Ruta para obtener una categoría por su ID
router.post('/categorias', crearCategoria); // Ruta para crear una nueva categoría
router.put('/categorias/:id', actualizarCategoria); // Ruta para actualizar una categoría por su ID
router.delete('/categorias/:id', eliminarCategoria); // Ruta para eliminar una categoría por su ID
module.exports = router;

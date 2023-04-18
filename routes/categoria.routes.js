'Ruta: /api/categoria';

const { Router } = require('express');
const { obtenerTodasLasCategorias, obtenerCategoriaPorId, crearCategoria, actualizarCategoria, eliminarCategoria } = require('../controllers/categoria.controller');

const router = Router();

router.get('/', obtenerTodasLasCategorias); // Ruta para obtener todas las categorías
router.get('/byId', obtenerCategoriaPorId); // Ruta para obtener una categoría por su ID
router.post('/', crearCategoria); // Ruta para crear una nueva categoría
router.put('/', actualizarCategoria); // Ruta para actualizar una categoría por su ID
router.delete('/', eliminarCategoria); // Ruta para eliminar una categoría por su ID
module.exports = router;

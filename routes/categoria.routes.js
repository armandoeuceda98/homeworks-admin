'Ruta: /api/categoria';

const { Router } = require('express');
const { obtenerTodasLasCategorias, obtenerCategoriaPorId, crearCategoria, actualizarCategoria, eliminarCategoria } = require('../controllers/categoria.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');

const router = Router();

router.get('/', [validarJWT], obtenerTodasLasCategorias); // Ruta para obtener todas las categorías
router.get('/byId', [validarJWT], obtenerCategoriaPorId); // Ruta para obtener una categoría por su ID
router.post('/', [validarJWT], crearCategoria); // Ruta para crear una nueva categoría
router.put('/', [validarJWT], actualizarCategoria); // Ruta para actualizar una categoría por su ID
router.delete('/', [validarJWT], eliminarCategoria); // Ruta para eliminar una categoría por su ID
module.exports = router;

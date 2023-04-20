'Ruta: /api/categoria';

const { Router } = require('express');
const { obtenerTodasLasCategorias, obtenerCategoriaPorId, crearCategoria, actualizarCategoria, eliminarCategoria } = require('../controllers/categoria.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');
const { check } = require('express-validator');

const router = Router();

router.get('/', [validarJWT], obtenerTodasLasCategorias); // Ruta para obtener todas las categorías
router.get('/byId', [
    validarJWT,
    check('idCategoria', 'El id de Categoria es obligatorio.').notEmpty(),
    check('idCategoria', 'El id de Categoria es entero.').isInt(),
], obtenerCategoriaPorId); // Ruta para obtener una categoría por su ID
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio.').notEmpty(),
    check('nombre', 'El nombre es texto.').isString(),
    check('descripcion', 'El descripcion es obligatorio.').notEmpty(),
    check('descripcion', 'El descripcion es texto.').isString(),
], crearCategoria); // Ruta para crear una nueva categoría
router.put('/', [
    validarJWT,
    check('idCategoria', 'El id de Categoria es obligatorio.').notEmpty(),
    check('idCategoria', 'El id de Categoria es entero.').isInt(),
    check('nombre', 'El nombre es obligatorio.').notEmpty(),
    check('nombre', 'El nombre es texto.').isString(),
    check('descripcion', 'El descripcion es obligatorio.').notEmpty(),
    check('descripcion', 'El descripcion es texto.').isString(),
], actualizarCategoria); // Ruta para actualizar una categoría por su ID
router.delete('/', [
    validarJWT,
    check('idCategoria', 'El id de Categoria es obligatorio.').notEmpty(),
    check('idCategoria', 'El id de Categoria es entero.').isInt(),
], eliminarCategoria); // Ruta para eliminar una categoría por su ID
module.exports = router;

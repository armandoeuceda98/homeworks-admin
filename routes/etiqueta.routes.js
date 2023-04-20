// Ruta: /api/etiqueta

const { Router } = require('express');
const { obtenerTodasLasEtiquetas, obtenerEtiquetaPorId, crearEtiqueta, actualizarEtiqueta, eliminarEtiqueta } = require('../controllers/etiqueta.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');
const { check } = require('express-validator');

const router = Router();

router.get('/', [validarJWT], obtenerTodasLasEtiquetas); // Ruta para obtener todas las etiquetas
router.get('/byId', [
    validarJWT,
    check('idEtiqueta', 'El id de Etiqueta es obligatorio.').notEmpty(),
    check('idEtiqueta', 'El id de Etiqueta es entero.').isInt(),
], obtenerEtiquetaPorId); // Ruta para obtener una etiqueta por su ID
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio.').notEmpty(),
    check('nombre', 'El nombre es texto.').isString(),
], crearEtiqueta); // Ruta para crear una nueva etiqueta
router.put('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio.').notEmpty(),
    check('nombre', 'El nombre es texto.').isString(),
    check('idEtiqueta', 'El id de Etiqueta es obligatorio.').notEmpty(),
    check('idEtiqueta', 'El id de Etiqueta es entero.').isInt(),
], actualizarEtiqueta); // Ruta para actualizar una etiqueta por su ID
router.delete('/', [
    validarJWT,
    check('idEtiqueta', 'El id de Etiqueta es obligatorio.').notEmpty(),
    check('idEtiqueta', 'El id de Etiqueta es entero.').isInt(),
], eliminarEtiqueta); // Ruta para eliminar una etiqueta por su ID

module.exports = router;

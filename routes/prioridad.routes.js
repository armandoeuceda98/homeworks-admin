'Ruta: /api/prioridad'

const { Router } = require('express');
const { obtenerTodasLasPrioridades, obtenerPrioridadPorId, crearPrioridad, actualizarPrioridad, eliminarPrioridad } = require('../controllers/prioridad.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');
const { check } = require('express-validator');

const router = Router();

router.get('/', [validarJWT], obtenerTodasLasPrioridades); // Ruta para obtener todas las
router.get('/byId', [
    validarJWT,
    check('idPrioridad', 'El id de Prioridad es obligatorio.').notEmpty(),
    check('idPrioridad', 'El id de Prioridad es entero.').isInt(),
], obtenerPrioridadPorId); // Ruta para obtener una prioridad por su ID
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio.').notEmpty(),
    check('nombre', 'El nombre es texto.').isString(),
    check('descripcion', 'El descripcion es obligatorio.').notEmpty(),
    check('descripcion', 'El descripcion es texto.').isString(),
], crearPrioridad); // Ruta para crear una nueva prioridad
router.put('/', [
    validarJWT,
    check('idPrioridad', 'El id de Prioridad es obligatorio.').notEmpty(),
    check('idPrioridad', 'El id de Prioridad es entero.').isInt(),
    check('nombre', 'El nombre es obligatorio.').notEmpty(),
    check('nombre', 'El nombre es texto.').isString(),
    check('descripcion', 'El descripcion es obligatorio.').notEmpty(),
    check('descripcion', 'El descripcion es texto.').isString(),
], actualizarPrioridad); // Ruta para actualizar una prioridad por su ID
router.delete('/', [
    validarJWT,
    check('idEtiqueta', 'El id de Etiqueta es obligatorio.').notEmpty(),
    check('idEtiqueta', 'El id de Etiqueta es entero.').isInt(),
], eliminarPrioridad); // Ruta para eliminar una prioridad por su ID

module.exports = router;

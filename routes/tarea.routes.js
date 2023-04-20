'Ruta: /api/tarea';

const { Router } = require('express');
const { obtenerTodasLasTareasDeUsuario, obtenerTareaPorId, crearTarea, actualizarTarea, eliminarTarea, } = require('../controllers/tarea.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');
const { check } = require('express-validator');

const router = Router();

router.get('/usuario', [
    validarJWT,
    check('idUsuario', 'El id de Usuario es obligatorio.').notEmpty(),
    check('idUsuario', 'El id de Usuario es entero.').isInt(),
], obtenerTodasLasTareasDeUsuario); // Ruta para obtener todas las tareas de un usuario por su ID
router.get('/byId', [
    validarJWT,
    check('idTarea', 'El id de Tarea es obligatorio.').notEmpty(),
    check('idTarea', 'El id de Tarea es entero.').isInt(),
], obtenerTareaPorId); // Ruta para obtener una tarea por su ID
router.post('/', [
    validarJWT,
    check('titulo', 'El titulo es obligatorio.').notEmpty(),
    check('titulo', 'El titulo es texto.').isString(),
    check('descripcion', 'El descripcion es obligatorio.').notEmpty(),
    check('descripcion', 'El descripcion es texto.').isString(),
    check('estado', 'El estado es obligatorio.').notEmpty(),
    check('estado', 'El estado es texto.').isString(),
    check('idCategoria', 'El id de Categoria es obligatorio.').notEmpty(),
    check('idCategoria', 'El id de Categoria es entero.').isInt(),
    check('idPrioridad', 'El id de Prioridad es obligatorio.').notEmpty(),
    check('idPrioridad', 'El id de Prioridad es entero.').isInt(),
    check('idUsuario', 'El id de Usuario es obligatorio.').notEmpty(),
    check('idUsuario', 'El id de Usuario es entero.').isInt(),
], crearTarea); // Ruta para crear una nueva tarea
router.put('/', [
    validarJWT,
    check('idTarea', 'El id de Tarea es obligatorio.').notEmpty(),
    check('idTarea', 'El id de Tarea es entero.').isInt(),
    check('titulo', 'El titulo es obligatorio.').notEmpty(),
    check('titulo', 'El titulo es texto.').isString(),
    check('descripcion', 'El descripcion es obligatorio.').notEmpty(),
    check('descripcion', 'El descripcion es texto.').isString(),
    check('estado', 'El estado es obligatorio.').notEmpty(),
    check('estado', 'El estado es texto.').isString(),
    check('idCategoria', 'El id de Categoria es obligatorio.').notEmpty(),
    check('idCategoria', 'El id de Categoria es entero.').isInt(),
    check('idPrioridad', 'El id de Prioridad es obligatorio.').notEmpty(),
    check('idPrioridad', 'El id de Prioridad es entero.').isInt(),
], actualizarTarea); // Ruta para actualizar una tarea por su ID
router.delete('/', [
    validarJWT,
    check('idTarea', 'El id de Tarea es obligatorio.').notEmpty(),
    check('idTarea', 'El id de Tarea es entero.').isInt(),
], eliminarTarea); // Ruta para eliminar una tarea por su ID
module.exports = router;

'Ruta: /api/comentario';

const { Router } = require('express');
const { obtenerTodosLosComentariosDeTarea, obtenerComentarioPorId, crearComentario, actualizarComentario, eliminarComentario } = require('../controllers/comentario.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');
const { check } = require('express-validator');

const router = Router();

router.get('/tarea/', [
    validarJWT,
    check('idTarea', 'El id de Tarea es obligatorio.').notEmpty(),
    check('idTarea', 'El id de Tarea es entero.').isInt(),
], obtenerTodosLosComentariosDeTarea); // Ruta para obtener todos los 
router.get('/byId', [
    validarJWT,
    check('id', 'El id de Comentario es obligatorio.').notEmpty(),
    check('id', 'El id de Comentario es entero.').isInt(),
], obtenerComentarioPorId); // Ruta para obtener un comentario por su ID
router.post('/', [
    validarJWT,
    check('idTarea', 'El id de Tarea es obligatorio.').notEmpty(),
    check('idTarea', 'El id de Tarea es entero.').isInt(),
    check('id', 'El id de Comentario es obligatorio.').notEmpty(),
    check('id', 'El id de Comentario es entero.').isInt(),
    check('contenido', 'El contenido es obligatorio.').notEmpty(),
    check('contenido', 'El contenido es texto.').isString(),
], crearComentario); // Ruta para crear un nuevo comentario
router.put('/', [
    validarJWT,
    check('id', 'El id de Comentario es obligatorio.').notEmpty(),
    check('id', 'El id de Comentario es entero.').isInt(),
    check('contenido', 'El contenido es obligatorio.').notEmpty(),
    check('contenido', 'El contenido es texto.').isString(),
], actualizarComentario); // Ruta para actualizar un comentario por su ID
router.delete('/', [
    validarJWT,
    check('id', 'El id de Comentario es obligatorio.').notEmpty(),
    check('id', 'El id de Comentario es entero.').isInt(),
], eliminarComentario); // Ruta para eliminar un comentario por su ID

module.exports = router;

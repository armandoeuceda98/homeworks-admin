'Ruta: /api/comentario';

const { Router } = require('express');
const { obtenerTodosLosComentariosDeTarea, obtenerComentarioPorId, crearComentario, actualizarComentario, eliminarComentario } = require('../controllers/comentario.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');

const router = Router();

router.get('/tarea/', [validarJWT], obtenerTodosLosComentariosDeTarea); // Ruta para obtener todos los 
router.get('/byId', [validarJWT], obtenerComentarioPorId); // Ruta para obtener un comentario por su ID
router.post('/', [validarJWT], crearComentario); // Ruta para crear un nuevo comentario
router.put('/', [validarJWT], actualizarComentario); // Ruta para actualizar un comentario por su ID
router.delete('/', [validarJWT], eliminarComentario); // Ruta para eliminar un comentario por su ID

module.exports = router;

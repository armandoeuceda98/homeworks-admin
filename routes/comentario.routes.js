'Ruta: /api/comentario';

const { Router } = require('express');
const { obtenerTodosLosComentariosDeTarea, obtenerComentarioPorId, crearComentario, actualizarComentario, eliminarComentario } = require('../controllers/comentario.controller');

const router = Router();

router.get('/tarea/', obtenerTodosLosComentariosDeTarea); // Ruta para obtener todos los 
router.get('/byId', obtenerComentarioPorId); // Ruta para obtener un comentario por su ID
router.post('/', crearComentario); // Ruta para crear un nuevo comentario
router.put('/', actualizarComentario); // Ruta para actualizar un comentario por su ID
router.delete('/', eliminarComentario); // Ruta para eliminar un comentario por su ID

module.exports = router;

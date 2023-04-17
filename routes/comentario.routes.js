'Ruta: /api/comentario';

const { Router } = require('express');
const { obtenerTodosLosComentariosDeTarea, obtenerComentarioPorId, crearComentario, actualizarComentario, eliminarComentario } = require('../controllers/comentario.controller');

const router = Router();

router.get('/comentarios/:tarea', obtenerTodosLosComentariosDeTarea); // Ruta para obtener todos los comentarios
router.get('/comentarios/:id', obtenerComentarioPorId); // Ruta para obtener un comentario por su ID
router.post('/comentarios', crearComentario); // Ruta para crear un nuevo comentario
router.put('/comentarios/:id', actualizarComentario); // Ruta para actualizar un comentario por su ID
router.delete('/comentarios/:id', eliminarComentario); // Ruta para eliminar un comentario por su ID

module.exports = router;

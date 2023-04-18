'Ruta: /api/tarea';

const { Router } = require('express');
const { obtenerTodasLasTareasDeUsuario, obtenerTareaPorId, crearTarea, actualizarTarea, eliminarTarea, } = require('../controllers/tarea.controller');

const router = Router();

router.get('/usuario', obtenerTodasLasTareasDeUsuario); // Ruta para obtener todas las tareas de un usuario por su ID
router.get('/byId', obtenerTareaPorId); // Ruta para obtener una tarea por su ID
router.post('/', crearTarea); // Ruta para crear una nueva tarea
router.put('/', actualizarTarea); // Ruta para actualizar una tarea por su ID
router.delete('/', eliminarTarea); // Ruta para eliminar una tarea por su ID
module.exports = router;

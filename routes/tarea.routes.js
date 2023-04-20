'Ruta: /api/tarea';

const { Router } = require('express');
const { obtenerTodasLasTareasDeUsuario, obtenerTareaPorId, crearTarea, actualizarTarea, eliminarTarea, } = require('../controllers/tarea.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');

const router = Router();

router.get('/usuario', [validarJWT], obtenerTodasLasTareasDeUsuario); // Ruta para obtener todas las tareas de un usuario por su ID
router.get('/byId', [validarJWT], obtenerTareaPorId); // Ruta para obtener una tarea por su ID
router.post('/', [validarJWT], crearTarea); // Ruta para crear una nueva tarea
router.put('/', [validarJWT], actualizarTarea); // Ruta para actualizar una tarea por su ID
router.delete('/', [validarJWT], eliminarTarea); // Ruta para eliminar una tarea por su ID
module.exports = router;

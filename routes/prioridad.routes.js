'Ruta: /api/prioridad'

const { Router } = require('express');
const { obtenerTodasLasPrioridades, obtenerPrioridadPorId, crearPrioridad, actualizarPrioridad, eliminarPrioridad } = require('../controllers/prioridad.controller');
const { validarJWT } = require('../middlewares/validar_JWT.middleware');

const router = Router();

router.get('/', [validarJWT], obtenerTodasLasPrioridades); // Ruta para obtener todas las
router.get('/byId', [validarJWT], obtenerPrioridadPorId); // Ruta para obtener una prioridad por su ID
router.post('/', [validarJWT], crearPrioridad); // Ruta para crear una nueva prioridad
router.put('/', [validarJWT], actualizarPrioridad); // Ruta para actualizar una prioridad por su ID
router.delete('/', [validarJWT], eliminarPrioridad); // Ruta para eliminar una prioridad por su ID

module.exports = router;

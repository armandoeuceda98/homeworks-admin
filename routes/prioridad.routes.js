'Ruta: /api/prioridad'

const { Router } = require('express');
const { obtenerTodasLasPrioridades, obtenerPrioridadPorId, crearPrioridad, actualizarPrioridad, eliminarPrioridad } = require('../controllers/prioridad.controller');

const router = Router();

router.get('/', obtenerTodasLasPrioridades); // Ruta para obtener todas las
router.get('/byId', obtenerPrioridadPorId); // Ruta para obtener una prioridad por su ID
router.post('/', crearPrioridad); // Ruta para crear una nueva prioridad
router.put('/', actualizarPrioridad); // Ruta para actualizar una prioridad por su ID
router.delete('/', eliminarPrioridad); // Ruta para eliminar una prioridad por su ID

module.exports = router;
